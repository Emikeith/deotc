const ChurchData = {
    // 1. BUILDING PROJECT & VIDEO
    buildingProject: {
        title: "Building Our Future / የሕንፃ ግንባታ ፕሮጀክት",
        description: "Be a part of history. We are building a new sanctuary to serve our community and future generations. Watch our design plan video below to see the vision.",
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", // REPLACE with your YouTube Embed Link
        progress: "45%", 
        status: "Phase 1: Foundation & Framing"
    },

    // 2. ANNOUNCEMENTS
    announcements: {
        scrollingText: "🔔 ማሳሰቢያ፡ ነገ የጾም ቀን መሆኑን እናሳስባለን :: ⛪️ የሰንበት ትምህርት ቤት ምዝገባ ተጀምሯል :: 🙏 ጸሎተ ማኅሌት በ 5፡00 AM ይጀምራል ::",
        cards: [
            { tag: "BUILDING", tagColor: "#D4AF37", title: "Fundraising Gala", description: "Join us this Sunday for a special dinner to support our building project.", link: "#" },
            { tag: "UPDATE", tagColor: "#8B0000", title: "Sunday School", description: "New classes for youth ages 11-15 start this week.", link: "#" }
        ]
    },

    // 3. SUNDAY SCHOOL
    sundaySchool: {
        intro: "Nurturing children in the teachings of the Orthodox Tewahedo Church.",
        ageGroups: [
            { group: "Beginners (5-10)", focus: "Bible stories & basic prayers.", image: "https://via.placeholder.com/400x250?text=Beginners" },
            { group: "Youth (11+)", focus: "Church History & Sacraments.", image: "https://via.placeholder.com/400x250?text=Youth" }
        ],
        childRegistrationURL: "https://form.jotform.com/YOUR_CHILD_ID",
        volunteerRegistrationURL: "https://form.jotform.com/YOUR_VOLUNTEER_ID"
    },

    // 4. VOLUNTEERS, MINISTRIES, & CLERGY
    volunteers: {
        list: [
            { name: "Name 1", role: "Coordinator", image: "https://via.placeholder.com/150?text=Servant+1" },
            { name: "Name 2", role: "Teacher", image: "https://via.placeholder.com/150?text=Servant+2" }
        ]
    },
    ministries: [{ icon: "⛪", name: "Choir", desc: "Sacred hymns." }],
    clergy: [{ name: "Abba Name", title: "Priest", bio: "Parish lead." }],

    // 5. LINKS & CALENDAR
    googleCalendarURL: "https://calendar.google.com/calendar/embed?src=YOUR_ID&ctz=America/Winnipeg",
    donations: {
        paypalGeneral: "https://www.paypal.com/donate?id=GENERAL",
        paypalBuilding: "https://www.paypal.com/donate?id=BUILDING",
        zelle: "church@example.com",
        mailing: "123 Church St, Winnipeg, MB"
    },
    contactInfo: {
        phone: "+1 (204) 000-0000",
        address: "123 Church St, Winnipeg, MB",
        mapURL: "https://www.google.com/maps/embed?pb=..."
    },
    galleryPhotos: [{ url: "https://via.placeholder.com/600x400", caption: "Community Prayer" }]
};
