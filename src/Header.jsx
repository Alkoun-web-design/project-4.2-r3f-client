export default function Header() {
    return (
        // <header className="flex flex-row h-12 mx-4 px-4 py-3 rounded-full border-b border-gray-100 font-bold bg-[#0000007f]"> */}
        // <header className="flex flex-row h-12 mx-4 px-4 py-3 rounded-full font-bold bg-[#0000007f]"> */}
        // <header className="col-span-full row-span-1 rounded-full font-bold justify-items-center">
        //     <div className="flex flex-row mx-4 px-4 py-3 justify-content-center">
        //       <h2 className="hidden md:inline justify-start cursor-pointer" onClick={() => handlePageChange('none')}>AWDev</h2>
        //       <div className="place-items-center">
        //         <nav className="flex jusitfy-end text-xs md:text-md">
        //           <ul>
        //             <li className="m-1 p-1 md:px-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all" onClick={() => handlePageChange('projects')}>Projects</li>
        //             <li className="m-1 p-1 md:px-2 cursor-pointer text-nowrap hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all" onClick={() => handlePageChange('about')}>About AWDev</li>
        //             <li className="mx-4 px-4 cursor-pointer" onClick={() => setContent('contact')}>Contact</li>
        //           </ul>
        //         </nav>
        //       </div>

        //       <div className="flex flex-row ml-auto ">
        //         <a href="https://github.com/Alkoun-web-design" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><GithubIcon /></a>
        //         <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><LinkedIcon /></a>
        //         <a href="" rel="noreferrer noopener" target="_blank" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><FacebookIcon /></a>
        //       </div>
        //     </div>
        // </header>

        <header className="col-span-full row-span-1 rounded-full font-bold justify-items-center">
            <div className="flex flex-row mx-4 px-4 py-3 justify-content-center">
              <h2 className="hidden md:inline justify-start cursor-pointer" onClick={() => handlePageChange('none')}>AWDev</h2>
              <div className="place-items-center">
                <nav className="flex jusitfy-end text-xs md:text-md">
                  <ul>
                    <li className="m-1 p-1 md:px-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all" onClick={() => handlePageChange('projects')}>Projects</li>
                    <li className="m-1 p-1 md:px-2 cursor-pointer text-nowrap hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all" onClick={() => handlePageChange('about')}>About AWDev</li>
                    <li className="mx-4 px-4 cursor-pointer" onClick={() => setContent('contact')}>Contact</li>
                  </ul>
                </nav>
              </div>

              <div className="flex flex-row ml-auto ">
                <a href="https://github.com/Alkoun-web-design" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/hassam-sajid-26560752/" target="_blank" rel="noreferrer noopener" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><LinkedIcon /></a>
                <a href="" rel="noreferrer noopener" target="_blank" className="m-1 md:mx-4 h-6 w-6 hover:bg-gray-100 hover:text-gray-900 rounded-sm transition-all"><FacebookIcon /></a>
              </div>
            </div>
        </header>
    )
}