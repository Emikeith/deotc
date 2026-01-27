const ChurchData = {
    // 1. HOME: GOOGLE CALENDAR
    googleCalendarURL: "https://calendar.google.com/calendar/embed?src=N2U5NjhkZjM3YmZjZWZkODhmNjUwNzlkZjA1Y2Y2NzQxNjI1YTM2ZDJjMzlkMTg0NDJjZTEzNTZlMWY0NmEzYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&ctz=America%2FWinnipeg",

    // 2. CALENDAR PAGE: UPCOMING EVENTS
    upcomingEvents: [
        { month: "JAN", day: "30", title: "Evening Prayer / የሰርክ ጸሎት", details: "Time: 6:00 PM | Church Chapel" },
        { month: "FEB", day: "02", title: "Divine Liturgy / ቅዳሴ", details: "Sunday Morning Service | 7:00 AM" }
    ],

    // 3. MINISTRIES: THE HUB
    ministries: [
        { icon: "⛪", name: "Choir (መዘምራን)", desc: "Serving through sacred hymns and liturgical chants." },
        { icon: "📖", name: "Sunday School", desc: "Nurturing the next generation in the faith." }
    ],

    // 4. CLERGY: PROFILES
    clergy: [
        { name: "His Holiness Name", title: "Archbishop / ብፁዕ አቡነ", bio: "Spiritual leadership for the diocese." },
        { name: "Father Name", title: "Parish Priest / መልአከ ሰላም", bio: "Leading our local congregation." }
    ],

    // 5. GALLERY PHOTOS
    galleryPhotos: [
        { url: "https://via.placeholder.com/600x400?text=Church+Exterior", caption: "Our Church Building" },
        { url: "https://via.placeholder.com/600x400?text=Liturgy", caption: "Sunday Divine Liturgy" }
    ],

    // 6. DONATIONS (PayPal & Zelle)
    donations: {
        title: "Support Our Church / ቤተክርስቲያኑን ይደግፉ",
        description: "Your contributions help us grow our mission. May God bless your generosity.",
        paypalLink: "https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_ID",
        zelleInfo: "church_email@example.com",
        mailingAddress: "P.O. Box 123, Winnipeg, MB, R3C 2H1"
    },

    // 7. SUNDAY SCHOOL REGISTRATION
    sundaySchool: {
        intro: "Nurturing children in the teachings of the Orthodox Tewahedo Church.",
        ageGroups: [
            { group: "Ages 5-10", focus: "Bible Stories" },
            { group: "Ages 11-15", focus: "Sacraments" }
        ],
        registrationID: "YOUR_FORMSPREE_ID" // For Registration and Contact forms
    },

    // 8. CONTACT INFO
    contactInfo: {
        phone: "+1 (204) 000-0000",
        address: "123 Church St, Winnipeg, MB",
        mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345!2d-97.13!3d49.89"
    }
};
