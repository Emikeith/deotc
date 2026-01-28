const ChurchData = {
    // BUILDING PROJECT
    buildingProject: {
        title: "Building Our Future / የሕንፃ ግንባታ ፕሮጀክት",
        description: "Be a part of history. We are building a new sanctuary to serve our community and future generations. Watch our design plan video below to see the vision.",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", // REPLACE with your YouTube Embed Link
        progress: "45%", 
        status: "Phase 1: Foundation & Framing"
    },

    // ANNOUNCEMENTS (Home Page Cards)
    announcements: {
        cards: [
            { tag: "BUILDING", tagColor: "#D4AF37", title: "Fundraising Update", description: "We have reached 45% of our Phase 1 goal! Thank you to all our donors.", link: "#" },
            { tag: "EDUCATION", tagColor: "#8B0000", title: "Sunday School", description: "New classes for youth start this month. Register via the Sunday School tab.", link: "#" }
        ]
    },

    // SUNDAY SCHOOL
    sundaySchool: {
        intro: "Nurturing children in the teachings of the Orthodox Tewahedo Church.",
        ageGroups: [
            { group: "Beginners (5-10)", focus: "Bible stories & basic prayers.", image: "https://via.placeholder.com/400x250?text=Beginners" },
            { group: "Youth (11+)", focus: "Church History & Sacraments.", image: "https://via.placeholder.com/400x250?text=Youth" }
        ],
        childRegistrationURL: "https://form.jotform.com/YOUR_CHILD_ID",
        volunteerRegistrationURL: "https://form.jotform.com/YOUR_VOLUNTEER_ID"
    },

    // VOLUNTEERS
    volunteers: {
        list: [
            { name: "Name 1", role: "Coordinator", image: "https://via.placeholder.com/150?text=Servant+1" },
            { name: "Name 2", role: "Teacher", image: "https://via.placeholder.com/150?text=Servant+2" }
        ]
    },

    // CORE LINKS
    donations: {
        paypalGeneral: "https://www.paypal.com/donate?id=GENERAL",
        paypalBuilding: "https://www.paypal.com/donate?id=BUILDING",
        zelle: "church@example.com",
        mailing: "123 Church St, Winnipeg, MB"
    }
};
