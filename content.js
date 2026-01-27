const ChurchData = {
    // 1. CALENDAR: List View (Option 1)
    upcomingEvents: [
        { month: "JAN", day: "30", title: "Evening Prayer", details: "Time: 6:00 PM | Church Chapel" },
        { month: "FEB", day: "02", title: "Divine Liturgy", details: "Sunday Morning Service | 7:00 AM" },
        { month: "MAR", day: "12", title: "Youth Seminar", details: "Spiritual education for youth." }
    ],

    // 2. MINISTRIES: The Hub
    ministries: [
        { icon: "⛪", name: "Choir", desc: "Sacred hymns and liturgical chanting." },
        { icon: "📖", name: "Sunday School", desc: "Faith education for the children." },
        { icon: "🤝", name: "Charity", desc: "Outreach and community support." }
    ],

    // 3. CLERGY: Profiles
    clergy: [
        { name: "His Holiness Name", title: "Archbishop", bio: "Serving the diocese since 2010." },
        { name: "Abba Name", title: "Parish Priest", bio: "Leading our local congregation." }
    ],

    // 4. GOOGLE CALENDAR ID (For Home Page Option 2)
    googleCalendarURL: "https://calendar.google.com/calendar/embed?src=YOUR_ID_HERE&ctz=America%2FWinnipeg"
};