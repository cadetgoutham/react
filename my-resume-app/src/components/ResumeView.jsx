import { useSelector } from 'react-redux';
import { FiPrinter, FiDownload, FiMail, FiPhone, FiMapPin, FiBriefcase, FiBook, FiZap } from 'react-icons/fi';

export default function ResumeView() {
  const { myList } = useSelector((state) => state.Details);
  const { personalDetails, ExperienceDetails, EducationDetail, SkillDetails } = myList;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const resumeContent = document.getElementById('resume-content').innerText;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
    element.setAttribute('download', 'Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 print:hidden">
          <button
            onClick={handlePrint}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <FiPrinter size={20} />
            Print Resume
          </button>
          <button
            onClick={handleDownload}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <FiDownload size={20} />
            Download
          </button>
        </div>

        {/* Resume Document */}
        <div id="resume-content" className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Personal Details Section */}
          {personalDetails && personalDetails.length > 0 ? (
            personalDetails.map((data, index) => (
              <div key={index} className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.Name}</h1>
                <p className="text-primary-100 text-lg mb-6">Professional Profile</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <FiMail size={20} className="flex-shrink-0" />
                    <div>
                      <p className="text-primary-100 text-sm">Email</p>
                      <p className="font-semibold">{data.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FiPhone size={20} className="flex-shrink-0" />
                    <div>
                      <p className="text-primary-100 text-sm">Phone</p>
                      <p className="font-semibold">{data.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FiMapPin size={20} className="flex-shrink-0" />
                    <div>
                      <p className="text-primary-100 text-sm">Location</p>
                      <p className="font-semibold">{data.addr}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <p className="text-yellow-800">❌ No personal details added</p>
            </div>
          )}

          <div className="p-8 md:p-12 space-y-8">
            {/* Work Experience Section */}
            {ExperienceDetails && ExperienceDetails.length > 0 ? (
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary-200">
                  <FiBriefcase className="text-primary-600" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Work Experience</h2>
                </div>
                
                <div className="space-y-6">
                  {ExperienceDetails.map((data, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{data.designation}</h3>
                        <span className="text-primary-600 font-semibold mt-1 md:mt-0">📅 {data.Year}</span>
                      </div>
                      <p className="text-gray-600 font-medium">{data.CompanyName}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <p className="text-yellow-800">❌ No experience details added</p>
              </div>
            )}

            {/* Education Section */}
            {EducationDetail && EducationDetail.length > 0 ? (
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary-200">
                  <FiBook className="text-primary-600" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Education</h2>
                </div>
                
                <div className="space-y-6">
                  {EducationDetail.map((data, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{data.Degree}</h3>
                        <span className="text-primary-600 font-semibold mt-1 md:mt-0">🎓 {data.PassedYear}</span>
                      </div>
                      <p className="text-gray-600 font-medium">{data.CollegeName}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <p className="text-yellow-800">❌ No education details added</p>
              </div>
            )}

            {/* Skills Section */}
            {SkillDetails && SkillDetails.length > 0 ? (
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary-200">
                  <FiZap className="text-primary-600" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Skills & Expertise</h2>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {SkillDetails.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-glow transition-shadow"
                    >
                      ⚡ {skill}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <p className="text-yellow-800">❌ No skills added</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 md:px-12 py-6 text-center border-t-2 border-gray-200 print:hidden">
            <p className="text-gray-600 text-sm">
              Generated by Resume Builder • {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Print Styles */}
        <style>{`
          @media print {
            body {
              background: white;
            }
            .print\\:hidden {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}