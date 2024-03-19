import myImage from '../../image/image.jpg';

export default function Resume() {
    return (
        <div className=" flex justify-center wx-auto h-screen">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-2/5 md:w-3/10 lg:w-2/5 xl:w-3/10 border border-black border-r-0">
                    <div className="bg-stone-700 text-white h-full">
                        <div className="flex justify-center p-6">
                            <img src={myImage} alt="Description of the image" className="w-[122px] h-40 rounded-lg object-cover" />
                        </div>
                        <div className="sm:hidden mb-3 text-center">
                            <h1 className="font-bold text-2xl p-3">Varattaya Panyachotchuang</h1>
                        </div>
                        <h1 className="bg-stone-800 font-bold text-2xl text-white py-2 px-4 pr-4 mr-4 ">CONTACT</h1>
                        <div className=" p-4">
                            <h2 className="font-bold">Phone</h2>
                            <p>(+66) 88 092 5781</p>
                        </div>
                        <div className="p-4">
                            <h2 className="font-bold">Email</h2>
                            <p className="font-normal max-w-full sm:max-w-none break-all sm:inline">varattaya.panyachotchuang@gmail.com</p>
                        </div>
                        <div className="mb-4 p-4">
                            <h2 className="font-bold">Github</h2>
                            <a href="https://github.com/DoLLaRs6252" class="underline">https://github.com/DoLLaRs6252</a>
                        </div>
                        <div >
                            <h1 className="bg-stone-800 font-bold text-2xl text-white py-2 px-4 mr-4">EDUCATION</h1>
                            <div className="p-4">
                                <h2 className="font-extrabold">Bachelor of Science Program in Computer Science</h2>
                                <h3 className='font-semibold'>Silpakorn University | GPA 3.25</h3>
                                <p>2021 - 2024 </p>
                            </div>
                            <div className="mb-4 pt-0 p-4">
                                <h2 className="font-extrabold">High school education</h2>
                                <h3 className="font-semibold">Debsirin School | GPA 3.19</h3>
                                <p>2018 - 2021</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="bg-stone-800 font-bold text-2xl text-white py-2 px-4 mr-4">HARD SKILLS</h1>
                            <div className="m-2">
                                <ul className="p-4 m-2 list-disc">
                                    <li className="px-2">HTML, CSS, JavaScript, SQL, Java, Python</li>
                                    <li className="p-2">Intermediate English</li>
                                    <li className="px-2">Object-Oriented Programming</li>
                                </ul>
                            </div>
                            <h1 className="bg-stone-800 font-bold text-2xl text-white py-2 px-4 mr-4">SOFT SKILLS</h1>
                            <div className="m-2 flex flex-wrap  items-stretch ">
                                <ul className="p-4 pl-6  w-1/2 list-disc ">
                                    <li className="py-1">Communication</li>
                                    <li className="my-1">Problem Solving</li>
                                    <li className="my-1">Enthusiasm for Learning</li>
                                </ul>
                                <ul className="p-4 pr-0 pl-7 w-1/2 list-disc ">
                                    <li className="my-1">Time Management</li>
                                    <li className="my-1">Flexibility</li>
                                    <li className="my-1">Handling Pressure</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full sm:w-3/5 p-8 pt-4 border border-black border-l-0">
                    <div className=" hidden sm:block mb-4">
                        <h1 className="text-5xl font-bold tracking-[8px]">Varattaya </h1>
                        <h2 className="font-medium text-4xl p-1 tracking-[6px]">Panyachotchuang</h2>
                    </div>
                    <div className="sm-flex sm-justify-center">
                        <div className="bg-stone-800 text-white  mb-4  w-4/5  ">
                            <h2 className=" text-2xl  text-center p-1 font-normal">SOFTWARE DEVELOPER</h2>
                        </div>
                    </div>
                    <div>
                        <div className="border border-black mb-4 ">
                            <div className="relative mt-4 mb-16">
                                <h1 className="bg-stone-800 font-bold text-2xl text-white pl-9 py-2 px-4  absolute w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 sm:w-full left-[-20px]">ABOUT ME</h1>
                            </div>
                            <p className="m-4 mt-[70px] text-sm">I am a student of the Faculty of Computer Science at Silpakorn University who is passionate about studying and developing skills in computer science and advanced technology. And also a passion for problem-solving and an ability to learn based on rapidly changing technology.</p>
                        </div>
                        <div className="border border-black mb-4  pt-0 relative">
                            <div className="flex-none w-[1px] h-[75%]  bg-black absolute left-[19px] top-[78px]"></div>
                            <div className="relative mt-4 mb-16">
                                <h1 className="bg-stone-800 font-bold text-2xl text-white pl-9 py-2 px-4  md:w-2/3 lg:w-2/3 xl:w-2/3 sm:w-full absolute left-[-20px]">PROJECTS</h1>
                            </div>
                            <ul className="m-4 p-4 pt-1 pr-0 list-none">

                                <li className="relative">
                                    <div class="w-3 h-3 rounded-full flex-none  bg-black absolute left-[-18px] top-2"></div>

                                    <div>
                                        <h2 className="font-semibold">July 2023 - Oct 2023</h2>
                                        <h2 className="font-extrabold">NLPFake news detection lDeveloper</h2>
                                        <ul className="m-4 mt-1 list-disc">
                                            <li>Technologies used: Python.</li>
                                            <li className="text-sm">
                                                In my recent AI project, I used US news articles to train
                                                multiple machine learning models. I aimed to create efficient
                                                predictive models that could analyze and forecast outcomes
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div class="w-3 h-3 rounded-full flex-none  bg-black absolute left-[-18px] top-2"></div>
                                    <div>
                                        <h2 className='font-semibold'>Jan 2023 - Mar 2023</h2>
                                        <h2 className='font-extrabold'>Coffeeshop | Frontend</h2>
                                        <ul className="m-4 mt-1 list-disc">
                                            <li>Technologies used: HTML, CSS</li>
                                            <li className='text-sm'>
                                                I got an opportunity to be a Frontend Developer to develop a
                                                website for a coffee shop, using HTML and CSS to create
                                                different web windows such as a login page, home page, and
                                                data display page received from the backend database, user
                                                profile page, and product order page. I have tested and finetuned the interface to make it efficient and provide the best
                                                user experience.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="border border-black mb-4 relative pt-0">
                            <div className="flex-none w-[1px] h-[50%] bg-black absolute left-[19px] top-[74px]"></div>
                            <div class="w-3 h-3 rounded-full flex-none  bg-black absolute left-[13px] top-[74px]"> </div>
                            <div className=" mt-4 mb-16 ">
                                <h1 className="bg-stone-800  font-bold text-2xl text-white pl-9 py-2 px-4  md:w-2/3 lg:w-2/3 xl:w-2/3 sm:w-full absolute left-[-20px]">ACTIVTY</h1>
                            </div>
                            <ul className="m-4 p-4 pt-1 list-disc  ">
                                <li className='list-none'>
                                    <div>
                                        <div className="flex justify-between  relative ">
                                            <h2 className='font-extrabold e'>Orientation</h2>
                                            <h2 className="mr-4 font-semibold">July 2022</h2>
                                        </div>
                                        <ul className="m-4 mt-1 list-disc text-sm">
                                            <li>I was assigned the role of nurse to help provide first aid and
                                                first aid to first-year students who came to participate in the
                                                activity</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
