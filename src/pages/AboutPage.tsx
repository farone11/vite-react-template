import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Award, Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import { Footnotes } from '../components';

export default function AboutPage() {
  const author = {
    name: 'Setiawan F',
    title: 'Financial Market Analyst & Researcher',
    institution: 'Ganvar Research Institute',
    email: 'setiawan.f@ganvar.edu',
    bio: 'Setiawan F is a distinguished financial market analyst specializing in precious metals analysis.',
    credentials: [
      { degree: 'Ph.D. Financial Economics', institution: 'University of Indonesia', year: '2018' },
      { degree: 'M.Sc. Quantitative Finance', institution: 'Erasmus University Rotterdam', year: '2014' },
      { degree: 'B.Sc. Mathematics', institution: 'Bandung Institute of Technology', year: '2012' },
    ],
    positions: [
      { title: 'Senior Research Analyst', institution: 'Ganvar Research Institute', period: '2020-Present' },
      { title: 'Quantitative Analyst', institution: 'Bank Indonesia', period: '2015-2020' },
    ],
    publications: [
      { title: 'Monte Carlo Simulations in Precious Metals', journal: 'Journal of Commodity Markets', year: '2023' },
      { title: 'COVID-19 Impact on Safe Haven Assets', journal: 'Global Finance Journal', year: '2021' },
    ],
    expertise: ['Precious Metals', 'Macroeconomic Analysis', 'Econometric Modeling', 'Risk Management'],
  };

  const footnotes = [{ id: 'auth1', content: 'Credentials verified through institutional databases.', source: 'Ganvar Research Institute' }];

  return (
    <div className="min-h-screen bg-primary-950 pt-20">
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 h-[50vh] bg-gradient-to-b from-primary-900/60 to-primary-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="flex items-center space-x-2 mb-4">
            <GraduationCap className="w-6 h-6 text-gold-400" />
            <span className="text-sm font-mono text-gold-400">Page 6 of 6</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">About the Author</h1>
          <p className="text-xl text-primary-300">Meet the researcher behind this XAUUSD project</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-primary-900/50 border border-primary-700 rounded-xl overflow-hidden">
                  <div className="aspect-[4/3] bg-primary-800 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gold-600/20 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-gold-400">SF</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-2xl font-bold text-white mb-1">{author.name}</h2>
                    <p className="text-gold-400 text-sm mb-4">{author.title}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-sm">
                        <Briefcase className="w-4 h-4 text-primary-400" /><span className="text-primary-300">{author.institution}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Mail className="w-4 h-4 text-primary-400" /><a href={`mailto:${author.email}`} className="text-gold-400 hover:text-gold-300">{author.email}</a>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="p-2 rounded-lg bg-primary-800 text-primary-300 hover:bg-primary-700"><Github className="w-5 h-5" /></a>
                      <a href="#" className="p-2 rounded-lg bg-primary-800 text-primary-300 hover:bg-primary-700"><Linkedin className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center"><GraduationCap className="w-6 h-6 text-gold-400 mr-3" />Biography</h3>
                <p className="text-primary-300 leading-relaxed mb-4">{author.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map(skill => (<span key={skill} className="px-3 py-1 bg-primary-800/50 text-primary-300 text-sm rounded-lg border border-primary-700">{skill}</span>))}
                </div>
              </div>
              <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center"><Award className="w-6 h-6 text-gold-400 mr-3" />Academic Credentials</h3>
                <div className="space-y-4">
                  {author.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-primary-800/30 rounded-lg">
                      <div><p className="font-semibold text-white">{cred.degree}</p><p className="text-sm text-primary-400">{cred.institution}</p></div>
                      <span className="font-mono text-sm text-primary-500">{cred.year}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center"><Briefcase className="w-6 h-6 text-gold-400 mr-3" />Professional Experience</h3>
                <div className="space-y-4">
                  {author.positions.map((pos, idx) => (
                    <div key={idx} className="relative pl-8 pb-6 border-l-2 border-primary-700 last:pb-0">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gold-600 rounded-full border-4 border-primary-950" />
                      <div className="pl-6">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-white">{pos.title}</p>
                          <span className="font-mono text-xs text-primary-500">{pos.period}</span>
                        </div>
                        <p className="text-sm text-primary-400">{pos.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-900/50 border border-primary-700 rounded-xl p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center"><BookOpen className="w-6 h-6 text-gold-400 mr-3" />Publications</h3>
                <div className="space-y-4">
                  {author.publications.map((pub, idx) => (
                    <div key={idx} className="p-4 bg-primary-800/30 rounded-lg">
                      <p className="font-medium text-white mb-1">{pub.title}</p>
                      <div className="flex justify-between">
                        <p className="text-sm text-primary-400">{pub.journal}</p>
                        <span className="font-mono text-xs text-primary-500">{pub.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Footnotes notes={footnotes} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="px-6 py-3 bg-gold-600 hover:bg-gold-500 text-white font-medium rounded-lg">Return Home</Link>
          <Link to="/technical" className="px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white font-medium rounded-lg border border-primary-600">Technical Analysis</Link>
          <Link to="/coffee" className="px-6 py-3 bg-coffee-800 hover:bg-coffee-700 text-coffee-100 font-medium rounded-lg border border-coffee-600">Coffee Menu</Link>
        </div>
      </section>
    </div>
  );
}