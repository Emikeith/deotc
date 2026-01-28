const ChurchData = {
    // 1. ANNOUNCEMENTS (Content for the scrolling ticker is in index.html, 
    // but the cards below appear on the Home page)
    announcements: {
        cards: [
            { tag: "BUILDING", tagColor: "#D4AF37", title: "New Design Reveal", description: "Watch our project video below to see the future of our parish sanctuary.", link: "#" },
            { tag: "EVENT", tagColor: "#8B0000", title: "Sunday School Registration", description: "Registration for the 2026 academic year is now open via JotForm.", link: "#" }
        ]
    },

    // 2. BUILDING PROJECT
    buildingProject: {
        title: "Building Our Future / የሕንፃ ግንባታ ፕሮጀክት",
        description: "Be a part of history. We are building a new sanctuary to serve our community and future generations. Every donation brings us one step closer to our goal.",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", // REPLACE with your YouTube ID
        progress: "45%", 
        status: "Phase 1: Foundation"
    },

    // 3. SUNDAY SCHOOL 
    sundaySchool: {
        intro: "Nurturing children in the teachings of the Orthodox Tewahedo Church.",
        ageGroups: [
            { group: "Beginners (5-10)", focus: "Bible stories & basic prayers.", image: "https://via.placeholder.com/400x250?text=Beginners" },
            { group: "Intermediate (11-15)", focus: "Church History & Sacraments.", image: "https://via.placeholder.com/400x250?text=Intermediate" }
        ],
        childRegistrationURL: "https://form.jotform.com/YOUR_CHILD_ID",
        volunteerRegistrationURL: "https://form.jotform.com/YOUR_VOLUNTEER_ID"
    },

    // 4. VOLUNTEERS & CLERGY
    volunteers: {
        list: [
            { name: "Deacon Name", role: "Sunday School Lead", image: "https://via.placeholder.com/150?text=Profile" },
            { name: "Teacher Name", role: "Youth Mentor", image: "https://via.placeholder.com/150?text=Profile" }
        ]
    },

    // 5. LINKS
    donations: {
        paypalGeneral: "https://www.paypal.com/donate?id=GENERAL",
        paypalBuilding: "https://www.paypal.com/donate?id=BUILDING",
        zelle: "church@example.com",
        mailing: "123 Church St, Winnipeg, MB"
    }
};
