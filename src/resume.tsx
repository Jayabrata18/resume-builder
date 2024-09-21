import React from "react"

const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 font-sans border border-black m-6">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-bold">Jayabrata Pramanik</h1>
                    <p className="text-sm mt-2">Kolkata, India</p>
                </div>
                <div className="text-right mt-3">
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:jayabrata180402@gmail.com"
                            className="text-blue-500 hover:underline">
                            jayabrata180402@gmail.com
                        </a>
                    </p>
                    <p>Mobile: +91-9091392947</p>
                    <p>
                        Portfolio:{" "}
                        <a
                            href="https://jayabratapramanik.me/"
                            className="text-blue-500 hover:underline">
                            jayabratapramanik.me
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/jayabrata-pramanik/"
                            className="text-blue-500 hover:underline">
                            LinkedIn: Jayabrata Pramanik
                        </a>
                    </p>
                </div>
            </div>
            {/* Links Section */}
            <div className="flex justify-between mt-4">
                <a
                    href="https://github.com/Jayabrata18"
                    className="text-blue-500 hover:underline">
                    GitHub: github.com/Jayabrata18
                </a>
                <a
                    href="https://twitter.com/Jayabrata22"
                    className="text-blue-500 hover:underline">
                    Twitter: @jayabrata22
                </a>
                <a
                    href="https://leetcode.com/jayabrata18/"
                    className="text-blue-500 hover:underline">
                    LeetCode: jayabrata18
                </a>
                <a
                    href="https://www.linkedin.com/in/jayabrata-pramanik/"
                    className="text-blue-500 hover:underline">
                    LinkedIn: Jayabrata Pramanik
                </a>
            </div>
            {/* Education Section */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold border-b-2 border-black">Education</h2>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-semibold">Techno Main SaltLake (CGPA: 8.03)</h3>
                            <p>Bachelor of Technology - Electronics and Communication Engineering</p>
                        </div>
                        <p>November 2020 – July 2024</p>
                    </div>
                    <p className="mt-2 text-gray-600">
                        Courses: Digital Signal Processing, Analog Communication, Digital Communication, Digital Circuits, Network Theory, Operating
                        Systems, Data Structures and Algorithms, Analysis Of Algorithms, Computer Networks, Object-Oriented Programming, DBMS, ITC.
                    </p>
                </div>
            </section>
            {/* Skills Summary */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold border-b-2 border-black">Skills Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <h3 className="font-semibold">Languages:</h3>
                        <p>JavaScript, Typescript, Java, Python, Solidity</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Frameworks:</h3>
                        <p>React, React Native, NestJS, Three.js, Web3.js, Ether.js, Tailwind CSS, Express, Next.js, Sanity.io, Firebase, Node.js</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Database:</h3>
                        <p>MongoDB, PostgreSQL, MySQL, Redis</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Infrastructure:</h3>
                        <p>Docker, Kubernetes, Git, GitHub Actions, AWS</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Platforms:</h3>
                        <p>Linux, Windows, AWS, GCP</p>
                    </div>
                </div>
            </section>
            {/* Work Experience */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold border-b-2 border-black">Work Experience</h2>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-semibold">Full Stack Developer Intern</h3>
                            <p>INFOMATICAE SOLUTIONS PVT. LTD, Mumbai</p>
                        </div>
                        <p>January 2024 - July 2024</p>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>
                            Developing front-end and back-end, maintaining full-stack websites to ensure optimal functionality and exceptional user
                            experience.
                        </li>
                        <li>Crafted an internal expense tracker website and app, streamlining expense management processes.</li>
                        <li>
                            Collaborating with cross-functional teams to define project requirements, scope, and deliverables, ensuring alignment with
                            client goals.
                        </li>
                        <li>Technologies: React, NestJS, PostgreSQL, MongoDB, Docker, GitHub.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-semibold">Full Stack Developer & Blockchain Developer Intern</h3>
                            <p>KNW Technologies (Remote)</p>
                        </div>
                        <p>June 2022 - July 2023</p>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>Developed and maintained full-stack websites, ensuring optimal functionality and exceptional user experience.</li>
                        <li>Pioneered the creation of a blockchain-based NFT minting website, implementing smart contracts and security measures.</li>
                        <li>Engineered and deployed web scraping tools to gather valuable data for clients.</li>
                    </ul>
                </div>
            </section>
            {/* Projects */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold border-b-2 border-black">Projects</h2>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <h3 className="font-semibold">Microservices-based Food Delivery Backend</h3>
                        <a
                            href="https://github.com/Jayabrata18/Food-delivery-app-microservice-backend"
                            className="text-blue-500 hover:underline">
                            GitHub
                        </a>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>Developed a microservices-based backend for a food delivery platform using NestJS.</li>
                        <li>Designed an API Gateway for route management and implemented role-based access control.</li>
                        <li>Containerized the application using Docker and deployed it on AWS EC2.</li>
                    </ul>
                </div>
            </section>
            {/* Hackathons */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold border-b-2 border-black">Hackathons</h2>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li>Participated in various MLH online hackathons and won track prizes.</li>
                    <li>Attended in-person MLH Diversion-2023 in Kolkata.</li>
                    <li>Attended in-person Solana Hacker House Bengaluru.</li>
                </ul>
            </section>
            <footer className="mt-8 text-sm text-gray-500 text-right">Last updated on 22/06/2024</footer>
        </div>
    )
}

export default Resume

