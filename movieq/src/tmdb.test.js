import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MovieCard from './Components/MovieCard'
import { fetchMovieList } from './tmdb'

const originalFetch = global.fetch

afterEach(() => {
    global.fetch = originalFetch
})

test.each([
    [500, 'Check that the MovieQ API server is running'],
    [401, 'Check the server TMDB_API_KEY'],
    [429, 'Too many movie requests']
])('rejects HTTP %i without treating an error body as movies', async (status, message) => {
    const json = jest.fn()
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status, json })

    await expect(fetchMovieList('/api/tmdb/trending/movie/day')).rejects.toThrow(message)
    expect(json).not.toHaveBeenCalled()
})

test('rejects HTML returned instead of the API response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        headers: { get: () => 'text/html' }
    })

    await expect(fetchMovieList('/api/tmdb/trending/movie/day')).rejects.toThrow('unexpected response')
})

test('rejects invalid movie results instead of corrupting movie list state', async () => {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        headers: { get: () => 'application/json' },
        json: async () => ({ error: 'Service unavailable' })
    })

    await expect(fetchMovieList('/api/tmdb/trending/movie/day')).rejects.toThrow('invalid movie data')
})

test('preserves valid movie results', async () => {
    const movies = { results: [{ id: 123, title: 'Example movie' }], total_pages: 1 }
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        headers: { get: () => 'application/json' },
        json: async () => movies
    })

    await expect(fetchMovieList('/api/tmdb/trending/movie/day')).resolves.toEqual(movies)
})

test('shows a failed movie request rather than an endless loader', () => {
    render(<MovieCard genreList={[]} loading={false} error={new Error('MovieQ API server is not running.')} />)

    expect(screen.getByRole('alert')).toHaveTextContent('MovieQ API server is not running.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
})

test('keeps the loader while a new request clears the previous error', () => {
    render(<MovieCard genreList={[]} loading={true} error={new Error('Previous request failed')} />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
})
