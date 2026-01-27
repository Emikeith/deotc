const ChurchData = {
    // 1. ANNOUNCEMENTS
    announcements: {
        scrollingText: "🔔 ማሳሰቢያ፡ ነገ የጾም ቀን መሆኑን እናሳስባለን :: ⛪️ የሰንበት ትምህርት ቤት ምዝገባ ተጀምሯል :: 🙏 ጸሎተ ማኅሌት በ 5፡00 AM ይጀምራል ::",
        cards: [
            { tag: "NEW", tagColor: "#8B0000", title: "የጥምቀት በዓል ዝግጅት", description: "ለጥምቀት በዓል በፈቃደኝነት ማገልገል የምትፈልጉ ምዕመናን በጽሕፈት ቤት በኩል እንድትመዘገቡ እናሳስባለን ::", link: "#" },
            { tag: "UPDATE", tagColor: "#333", title: "የመጽሐፍ ቅዱስ ጥናት", description: "የዘወትር ሐሙስ የመጽሐፍ ቅዱስ ጥናት ከምሽቱ 6:30 PM ጀምሮ በዙም (Zoom) ይካሄዳል ::", link: "#" }
        ]
    },

    // 2. SUNDAY SCHOOL GROUPS
    sundaySchool: {
        intro: "Nurturing children in the teachings of the Orthodox Tewahedo Church through scripture, hymns (Zema), and spiritual growth.",
        ageGroups: [
            { group: "Beginners (Ages 5-10)", focus: "Introduction to Bible stories, basic prayers, and lives of Saints through storytelling and art.", image: "https://via.placeholder.com/400x250?text=Beginner+Class" },
            { group: "Intermediate (Ages 11-15)", focus: "Deeper study of the Sacraments, Church History, and the meaning of the Divine Liturgy.", image: "https://via.placeholder.com/400x250?text=Intermediate+Class" }
        ],
        childRegistrationURL: "https://form.jotform.com/YOUR_CHILD_ID",
        volunteerRegistrationURL: "https://form.jotform.com/YOUR_VOLUNTEER_ID"
    },

    // 3. VOLUNTEERS
    volunteers: {
        title: "Meet Our Servants / አገልጋዮቻችን",
        description: "A dedicated team committed to teaching and nurturing our youth.",
        list: [
            { name: "Name 1", role: "Coordinator", image: "https://via.placeholder.com/150?text=Servant+1" },
            { name: "Name 2", role: "Teacher", image: "https://via.placeholder.com/150?text=Servant+2" }
        ]
    },

    // 4. CORE SETTINGS
    googleCalendarURL: "https://calendar.google.com/calendar/embed?src=YOUR_CAL_ID",
    galleryPhotos: [
        { url: "https://via.placeholder.com/600x400", caption: "Church Exterior" },
        { url: "https://via.placeholder.com/600x400", caption: "Sunday Service" }
    ],
    donations: {
        paypalLink: "https://www.paypal.com/donate?hosted_button_id=YOUR_ID",
        zelleInfo: "church_email@example.com",
        mailingAddress: "123 Church St, Winnipeg, MB"
    },
    contactInfo: {
        phone: "+1 (204) 000-0000",
        address: "123 Church St, Winnipeg, MB",
        mapEmbedURL: "https://www.google.com/maps/embed?pb=..."
    }
};
