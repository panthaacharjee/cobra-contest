import React from 'react'

const Footer = () => {
  return (
    <div className='bg-neutral'>
        <div className='container mx-auto'>
                <footer className="footer flex justify-between flex-wrap text-neutral-content p-10">
                    <nav className='w-full sm:w-5/12 lg:w-3/12 xl:w-2/12 text-center'>
                        <h6 className="footer-title">Products</h6>
                        <a className="link link-hover">Screen</a>
                        <a className="link link-hover">Interview</a>
                        <a className="link link-hover">Engage</a>
                        <a className="link link-hover">SkillUp</a>
                    </nav>
                    
                    <nav className='w-full sm:w-5/12 lg:w-3/12 xl:w-2/12 text-center'>
                        <h6 className="footer-title">Solutions</h6>
                        <a className="link link-hover">Set up your skills strategy</a>
                        <a className="link link-hover">Showcase your tech brand</a>
                        <a className="link link-hover">Optimize your hiring process</a>
                        <a className="link link-hover">Mobilize your internal talent</a>
                    </nav>
                    
                    <nav className='w-full sm:w-5/12 lg:w-3/12 xl:w-2/12 text-center'>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Customer stories</a>
                        <a className="link link-hover">Partners</a>
                        <a className="link link-hover">Integrations</a>
                        <a className="link link-hover">What's new</a>
                    </nav>
                    
                    <nav className='w-full sm:w-5/12 lg:w-3/12 xl:w-2/12 text-center'>
                        <h6 className="footer-title">About us</h6>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Newsroom</a>
                        <a className="link link-hover">Status</a>
                        <a className="link link-hover">Trust</a>
                    </nav>
                </footer>
        </div>
    </div>
  )
}

export default Footer