const jobData_interview = [
    {
        id: "job1",
        html: `<div id="job1" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">Mobile First Corp</h2>
                <i onclick="interviewDelete('job1')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>React Native Developer</p>
            <p>Remote
                •
                Full-time
                •
                $130,000 - $175,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Build cross-platform mobile applications using React Native. Work on products used by millions of users
                worldwide.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job2",
        html: `<div id="job2" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">WebFlow Agency</h2>
                <i onclick="interviewDelete('job2')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Web Designer & Developer</p>
            <p>Los Angeles, CA
                •
                Part-time
                •
                $80,000 - $120,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern
                web design trends.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job3",
        html: `<div id="job3" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">DataViz Solutions</h2>
                <i onclick="interviewDelete('job3')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Data Visualization Specialist</p>
            <p>Boston, MA
                •
                Full-time
                •
                $125,000 - $165,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong
                analytical thinking.
            </p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job4",
        html: `<div id="job4" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">CloudFirst Inc</h2>
                <i onclick="interviewDelete('job4')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Backend Developer</p>
            <p>Seattle, WA
                •
                Full-time
                •
                $140,000 - $190,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and
                cloud infrastructure.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job5",
        html: `<div id="job5" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">Innovation Labs</h2>
                <i onclick="interviewDelete('job5')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>UI/UX Engineer</p>
            <p>Austin, TX
                •
                Full-time
                •
                $110,000 - $150,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Create beautiful and functional user interfaces for our suite of products. Strong design skills and
                frontend development expertise required.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job6",
        html: `<div id="job6" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">MegaCorp Solutions</h2>
                <i onclick="interviewDelete('job6')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>JavaScript Developer</p>
            <p>New York, NY
                •
                Full-time
                •
                $130,000 - $170,00</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation,
                health insurance, and professional development opportunities.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job7",
        html: `<div id="job7" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">StartupXYZ</h2>
                <i onclick="interviewDelete('job7')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Full Stack Engineer</p>
            <p>Remote
                •
                Full-time
                •
                $120,000 - $160,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Join our fast-growing startup and work on our core platform. Experience with Node.js and React required.
                Great benefits and equity package included.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job8",
        html: `<div id="job8" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">TechCorp Industries</h2>
                <i onclick="interviewDelete('job8')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Senior Frontend Developer</p>
            <p>San Francisco, CA
                •
                Full-time
                •
                $130,000 - $175,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>We are looking for an experienced Frontend Developer to build scalable web applications using React and
                TypeScript. You will work with a talented team on cutting-edge projects.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    }
];


// const jobData_rejected =>>>>>>>>>>>>>>>>>>> [
const jobData_rejected = [
    {
        id: "job1",
        html: `<div id="job1" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">Mobile First Corp</h2>
                <i onclick="rejectedDelete('job1')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>React Native Developer</p>
            <p>Remote
                •
                Full-time
                •
                $130,000 - $175,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Build cross-platform mobile applications using React Native. Work on products used by millions of users
                worldwide.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job2",
        html: `<div id="job2" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">WebFlow Agency</h2>
                <i onclick="rejectedDelete('job2')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Web Designer & Developer</p>
            <p>Los Angeles, CA
                •
                Part-time
                •
                $80,000 - $120,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern
                web design trends.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job3",
        html: `<div id="job3" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">DataViz Solutions</h2>
                <i onclick="rejectedDelete('job3')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Data Visualization Specialist</p>
            <p>Boston, MA
                •
                Full-time
                •
                $125,000 - $165,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong
                analytical thinking.
            </p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job4",
        html: `<div id="job4" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">CloudFirst Inc</h2>
                <i onclick="rejectedDelete('job4')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Backend Developer</p>
            <p>Seattle, WA
                •
                Full-time
                •
                $140,000 - $190,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and
                cloud infrastructure.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job5",
        html: `<div id="job5" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">Innovation Labs</h2>
                <i onclick="rejectedDelete('job5')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>UI/UX Engineer</p>
            <p>Austin, TX
                •
                Full-time
                •
                $110,000 - $150,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Create beautiful and functional user interfaces for our suite of products. Strong design skills and
                frontend development expertise required.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job6",
        html: `<div id="job6" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">MegaCorp Solutions</h2>
                <i onclick="rejectedDelete('job6')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>JavaScript Developer</p>
            <p>New York, NY
                •
                Full-time
                •
                $130,000 - $170,00</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation,
                health insurance, and professional development opportunities.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job7",
        html: `<div id="job7" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">StartupXYZ</h2>
                <i onclick="rejectedDelete('job7')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Full Stack Engineer</p>
            <p>Remote
                •
                Full-time
                •
                $120,000 - $160,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>Join our fast-growing startup and work on our core platform. Experience with Node.js and React required.
                Great benefits and equity package included.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    },
    {
        id: "job8",
        html: `<div id="job8" class="job-card shadow-sm space-y-3">
            <div class="flex justify-between">
                <h2 class="font-bold text-xl">TechCorp Industries</h2>
                <i onclick="rejectedDelete('job8')" class="cursor-pointer fa-regular fa-trash-can"></i>
            </div>
            <p>Senior Frontend Developer</p>
            <p>San Francisco, CA
                •
                Full-time
                •
                $130,000 - $175,000</p>

            <span class="confirmation-flag inline-block">Not Applied</span>
            <p>We are looking for an experienced Frontend Developer to build scalable web applications using React and
                TypeScript. You will work with a talented team on cutting-edge projects.</p>
            <button class="btn btn-outline btn-accent">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
        </div>`
    }
];