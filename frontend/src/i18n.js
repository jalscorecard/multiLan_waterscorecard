const translations = {
  en: {
    steps: [
      "Start",
      "Language",
      "Contact Details",
      "Apartment Details",
      "Water Management",
      "Water Efficiency",
      "Groundwater Sustainability",
      "Water Circularity",
      "Green Vegetation",
      "Preview",
      "Success",
    ],
    start: {
      title: "Jal Smruti Apartment Building Water Scorecard Assessment Input Form",
      button: "Start Assessment",
    },
    language: {
      title: "Select Your Language",
      english: "English",
      hindi: "Hindi",
      next: "Next",
    },
    contact: {
      title: "Contact Person Details",
      fullName: "Full Name of Contact Person",
      email: "Email Address of Contact Person",
      whatsapp: "Whatsapp Number of Contact Person",
      date: "Date of Assessment",
    },
    apartment: {
      title: "About the Apartment Building being Assessed",
      name: "Name and Full Address of the Apartment Building",
      map: "Google map location link of the Apartment Building being assessed",
      units: "How many Units/Flats in the Apartment Building *",
    },
    buttons: {
      next: "Next",
      back: "Back",
      finish: "Finish",
      submit: "Submit",
      edit: "Edit your response",
      cancel: "Cancel",
      confirm: "Yes, Submit",
      restart: "Submit Another Form",
      pdf: "Download PDF Report",
      clear: "Clear Form",
    },
    messages: {
      required: "Required",
      invalidEmail: "Invalid email address",
      invalidPhone: "Phone must be exactly 10 digits",
      notApplicable: "Not Applicable",
      previewTitle: "Preview Your Submission",
      confirmSubmit: "Are you sure you want to submit and view your results?",
      thankYou: "Thank you, {name} for completing the assessment!",
    },
    sections: [
      {
        title: "1) Water Management",
        questions: [
          {
            label: "1.1 Status of Water Policy",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Water policy making in progress" },
              { value: 2, label: "Water Policy drafted" },
              { value: 3, label: "Water Policy drafted & communicated to staff & tenants" },
            ],
          },
          {
            label: "1.2 Status of Water Pledge",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Management have taken a water pledge" },
              { value: 2, label: "Management + Facility Staff have taken a water pledge" },
              { value: 3, label: "Management + Facility Staff + Tenants have taken a water pledge" },
            ],
          },
          {
            label: "1.3 Status of Water Charter",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Water Charter drafting in progress" },
              { value: 2, label: "Water Charter finalized" },
              { value: 3, label: "Water Charter finalized and displayed in public" },
            ],
          },
          {
            label: "1.4 Status of Water Saving Goals & Targets",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Work in progress" },
              { value: 2, label: "Water saving goals & targets have been set" },
              { value: 3, label: "Water saving goals & targets communicated to staff & tenants" },
            ],
          },
        ],
      },
      {
        title: "2) Water Efficiency",
        questions: [
          {
            label: "2.1 Status of Water Metering",
            options: [
              { value: 0, label: "Bulk water meter" },
              { value: 1, label: "Bulk meter + submeter" },
              { value: 2, label: "Bulk meter + submeter + monthly/weekly monitoring" },
              { value: 3, label: "Smart water sub meters" },
            ],
          },
          {
            label: "2.2 Status of Water Fixtures (Average Flow Rate in lpm)",
            options: [
              { value: 0, label: ">15 lpm" },
              { value: 1, label: "10–15 lpm" },
              { value: 2, label: "5–10 lpm" },
              { value: 3, label: "<5 lpm" },
            ],
          },
          {
            label: "2.3 Status of Toilet Flushing",
            options: [
              { value: 0, label: "Single flush (>12 litres)" },
              { value: 1, label: "Single flush (10–12 litres)" },
              { value: 2, label: "Dual flush (12/6 litres)" },
              { value: 3, label: "Dual flush (8/4 litres)" },
            ],
          },
          {
            label: "2.4 Status of Water Conservation Signage & Communication",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Signage in washrooms" },
              { value: 2, label: "Signage in washrooms and other areas" },
              { value: 3, label: "Signage + monthly staff & tenant awareness sessions" },
            ],
          },
          {
            label: "2.5 Status of Water Use in Cooling Tower",
            options: [
              { value: -1, label: "Not Applicable" },
              { value: 0, label: "No submeter / single pass use" },
              { value: 1, label: "Submeter + single pass use" },
              { value: 2, label: "Submeter + recirculation factor <3" },
              { value: 3, label: "Submeter + recirculation factor >3" },
            ],
          },
          {
            label: "2.6 Status of Water Use Intensity",
            options: [
              { value: 0, label: ">60% more than best practice benchmark" },
              { value: 1, label: "51–60% more than best practice benchmark" },
              { value: 2, label: "11–40% more than best practice benchmark" },
              { value: 3, label: "Within 10% of best practice benchmark" },
            ],
          },
        ],
      },
      {
        title: "3) Groundwater Sustainability",
        questions: [
          {
            label: "3.1 Groundwater dependency (% of total annual water)",
            options: [
              { value: 0, label: ">50%" },
              { value: 1, label: "20–50%" },
              { value: 2, label: "5–20%" },
              { value: 3, label: "<5%" },
            ],
          },
          {
            label: "3.2 Status of Groundwater Extraction",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Manual monitoring of pumped hours" },
              { value: 2, label: "Manual metering" },
              { value: 3, label: "Smart metering" },
            ],
          },
          {
            label: "3.3 Groundwater Recharge (% of extraction)",
            options: [
              { value: 0, label: "<20%" },
              { value: 1, label: "20–40%" },
              { value: 2, label: "40–50%" },
              { value: 3, label: ">50%" },
            ],
          },
        ],
      },
      {
        title: "4) Water Circularity",
        questions: [
          {
            label: "4.1 Status of Rainwater Harvesting",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Roofwater harvesting from <50% roof" },
              { value: 2, label: "Roofwater harvesting from >50% roof" },
              { value: 3, label: "Roofwater + non-roof water harvesting" },
            ],
          },
          {
            label: "4.2 Greywater/Sewage Recycling or Reuse",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Footprint area available for siting facility" },
              { value: 2, label: "Work in progress (designed, pending construction)" },
              { value: 3, label: "Recycling is operational" },
            ],
          },
          {
            label: "4.3 Collective RO Treated Water",
            options: [
              { value: 0, label: "No reuse – reject water discharged" },
              { value: 1, label: "Feasible for non-potable reuse" },
              { value: 2, label: "Plans in place for execution" },
              { value: 3, label: "Reject water reused for non-potable use" },
            ],
          },
        ],
      },
      {
        title: "5) Green Vegetation Cover",
        questions: [
          {
            label: "5.1 Green Cover Policy",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Drafting in progress" },
              { value: 2, label: "Finalized" },
              { value: 3, label: "Finalized & shared with stakeholders" },
            ],
          },
          {
            label: "5.2 Green Coverage Area",
            options: [
              { value: 0, label: "<10%" },
              { value: 1, label: "10–25%" },
              { value: 2, label: "25–50%" },
              { value: 3, label: ">50%" },
            ],
          },
          {
            label: "5.3 Green Landscapes",
            options: [
              { value: 0, label: "High water non-native + no smart irrigation" },
              { value: 1, label: "High water non-native + smart irrigation" },
              { value: 2, label: "Native species + no smart irrigation" },
              { value: 3, label: "Native species + smart irrigation" },
            ],
          },
          {
            label: "5.4 Green Roofs & Walls",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Plans in place" },
              { value: 2, label: "Green roofs operational" },
              { value: 3, label: "Green roofs + walls operational" },
            ],
          },
        ],
      },
    ],
  },
  hi: {
    steps: [
      "प्रारंभ",
      "भाषा",
      "संपर्क विवरण",
      "अपार्टमेंट विवरण",
      "जल प्रबंधन",
      "जल दक्षता",
      "भूजल स्थिरता",
      "जल परिपत्रता",
      "हरी वनस्पति",
      "पूर्वावलोकन",
      "सफलता",
    ],
    start: {
      title: "जल स्मृति अपार्टमेंट भवन जल स्कोरकार्ड मूल्यांकन इनपुट फॉर्म",
      button: "मूल्यांकन शुरू करें",
    },
    language: {
      title: "अपनी भाषा चुनें",
      english: "अंग्रेज़ी",
      hindi: "हिंदी",
      next: "आगे",
    },
    contact: {
      title: "संपर्क व्यक्ति का विवरण",
      fullName: "संपर्क व्यक्ति का पूरा नाम",
      email: "संपर्क व्यक्ति का ईमेल पता",
      whatsapp: "संपर्क व्यक्ति का व्हाट्सएप नंबर",
      date: "मूल्यांकन की तारीख",
    },
    apartment: {
      title: "मूल्यांकन किए जा रहे अपार्टमेंट भवन के बारे में",
      name: "अपार्टमेंट भवन का नाम और पूरा पता",
      map: "मूल्यांकन किए जा रहे अपार्टमेंट भवन का गूगल मैप लिंक",
      units: "अपार्टमेंट भवन में कितने यूनिट/फ्लैट हैं *",
    },
    buttons: {
      next: "आगे",
      back: "पीछे",
      finish: "समाप्त करें",
      submit: "जमा करें",
      edit: "अपने उत्तर संपादित करें",
      cancel: "रद्द करें",
      confirm: "हाँ, जमा करें",
      restart: "नया फॉर्म भरें",
      pdf: "पीडीएफ रिपोर्ट डाउनलोड करें",
      clear: "फॉर्म साफ़ करें",
    },
    messages: {
      required: "आवश्यक",
      invalidEmail: "अमान्य ईमेल पता",
      invalidPhone: "फ़ोन नंबर 10 अंकों का होना चाहिए",
      notApplicable: "लागू नहीं",
      previewTitle: "अपनी प्रविष्टि देखें",
      confirmSubmit: "क्या आप वाकई सबमिट करना चाहते हैं और परिणाम देखना चाहते हैं?",
      thankYou: "धन्यवाद, {name} मूल्यांकन पूरा करने के लिए!",
    },
    sections: [
      {
        title: "१) जल प्रबंधन",
        questions: [
          {
            label: "1.1 जल नीति की स्थिति",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "जल नीति निर्माण प्रगति पर" },
              { value: 2, label: "जल नीति का मसौदा तैयार" },
              { value: 3, label: "जल नीति तैयार और कर्मचारियों/किरायेदारों को सूचित" },
            ],
          },
          {
            label: "1.2 जल प्रतिज्ञा की स्थिति",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "प्रबंधन ने जल प्रतिज्ञा ली है" },
              { value: 2, label: "प्रबंधन + स्टाफ ने जल प्रतिज्ञा ली है" },
              { value: 3, label: "प्रबंधन + स्टाफ + किरायेदारों ने जल प्रतिज्ञा ली है" },
            ],
          },
          {
            label: "1.3 जल चार्टर की स्थिति",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "जल चार्टर मसौदा तैयार किया जा रहा है" },
              { value: 2, label: "जल चार्टर अंतिम रूप दिया गया" },
              { value: 3, label: "जल चार्टर अंतिम और सार्वजनिक रूप से प्रदर्शित" },
            ],
          },
          {
            label: "1.4 जल बचत लक्ष्यों और उद्देश्यों की स्थिति",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "प्रगति पर" },
              { value: 2, label: "लक्ष्य निर्धारित किए गए" },
              { value: 3, label: "लक्ष्य कर्मचारियों/किरायेदारों को सूचित किए गए" },
            ],
          },
        ],
      },
      {
        title: "२) जल दक्षता",
        questions: [
          {
            label: "2.1 जल मीटरिंग की स्थिति",
            options: [
              { value: 0, label: "बल्क जल मीटर" },
              { value: 1, label: "बल्क मीटर + सबमीटर" },
              { value: 2, label: "बल्क मीटर + सबमीटर + मासिक/साप्ताहिक निगरानी" },
              { value: 3, label: "स्मार्ट वाटर सब मीटर" },
            ],
          },
          {
            label: "2.2 जल फिटिंग्स का औसत प्रवाह दर (lpm)",
            options: [
              { value: 0, label: ">15 lpm" },
              { value: 1, label: "10–15 lpm" },
              { value: 2, label: "5–10 lpm" },
              { value: 3, label: "<5 lpm" },
            ],
          },
          {
            label: "2.3 शौचालय फ्लशिंग की स्थिति",
            options: [
              { value: 0, label: "सिंगल फ्लश (>12 लीटर)" },
              { value: 1, label: "सिंगल फ्लश (10–12 लीटर)" },
              { value: 2, label: "डुअल फ्लश (12/6 लीटर)" },
              { value: 3, label: "डुअल फ्लश (8/4 लीटर)" },
            ],
          },
          {
            label: "2.4 जल संरक्षण साइनज और संचार",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "शौचालयों में साइनज" },
              { value: 2, label: "शौचालयों और अन्य क्षेत्रों में साइनज" },
              { value: 3, label: "साइनज + मासिक जागरूकता सत्र" },
            ],
          },
          {
            label: "2.5 कूलिंग टावर में जल उपयोग",
            options: [
              { value: -1, label: "लागू नहीं" },
              { value: 0, label: "कोई सबमीटर नहीं / सिंगल पास उपयोग" },
              { value: 1, label: "सबमीटर + सिंगल पास उपयोग" },
              { value: 2, label: "सबमीटर + पुन:संचलन कारक <3" },
              { value: 3, label: "सबमीटर + पुन:संचलन कारक >3" },
            ],
          },
          {
            label: "2.6 जल उपयोग तीव्रता",
            options: [
              { value: 0, label: "श्रेष्ठ अभ्यास बेंचमार्क से >60% अधिक" },
              { value: 1, label: "श्रेष्ठ अभ्यास बेंचमार्क से 51–60% अधिक" },
              { value: 2, label: "श्रेष्ठ अभ्यास बेंचमार्क से 11–40% अधिक" },
              { value: 3, label: "श्रेष्ठ अभ्यास बेंचमार्क के भीतर 10%" },
            ],
          },
        ],
      },
      {
        title: "३) भूजल स्थिरता",
        questions: [
          {
            label: "3.1 भूजल निर्भरता (% वार्षिक जल खपत का)",
            options: [
              { value: 0, label: ">50%" },
              { value: 1, label: "20–50%" },
              { value: 2, label: "5–20%" },
              { value: 3, label: "<5%" },
            ],
          },
          {
            label: "3.2 भूजल निष्कर्षण की स्थिति",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "पंप घंटे की मैनुअल निगरानी" },
              { value: 2, label: "मैनुअल मीटरिंग" },
              { value: 3, label: "स्मार्ट मीटरिंग" },
            ],
          },
          {
            label: "3.3 भूजल पुनर्भरण (% निष्कर्षण का)",
            options: [
              { value: 0, label: "<20%" },
              { value: 1, label: "20–40%" },
              { value: 2, label: "40–50%" },
              { value: 3, label: ">50%" },
            ],
          },
        ],
      },
      {
        title: "४) जल परिपत्रता",
        questions: [
          {
            label: "4.1 वर्षा जल संचयन की स्थिति",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "<50% छत से संचयन" },
              { value: 2, label: ">50% छत से संचयन" },
              { value: 3, label: "छत + गैर-छत संचयन" },
            ],
          },
          {
            label: "4.2 ग्रे/सीवेज जल पुनर्चक्रण या पुन: उपयोग",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "सुविधा हेतु स्थान उपलब्ध" },
              { value: 2, label: "प्रगति पर – डिज़ाइन तैयार, निर्माण शेष" },
              { value: 3, label: "संचालनात्मक" },
            ],
          },
          {
            label: "4.3 सामूहिक आरओ जल स्थिति",
            options: [
              { value: 0, label: "कोई पुन: उपयोग नहीं, अपशिष्ट जल छोड़ा गया" },
              { value: 1, label: "गैर-पीने योग्य उपयोग हेतु संभव" },
              { value: 2, label: "योजनाएं तैयार, कार्यान्वयन शेष" },
              { value: 3, label: "अपशिष्ट जल का पुन: उपयोग हो रहा है" },
            ],
          },
        ],
      },
      {
        title: "५) हरित आवरण",
        questions: [
          {
            label: "5.1 ग्रीन कवर नीति",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "प्रगति पर" },
              { value: 2, label: "अंतिम रूप दिया गया" },
              { value: 3, label: "अंतिम रूप दिया गया और साझा" },
            ],
          },
          {
            label: "5.2 ग्रीन कवरेज क्षेत्र",
            options: [
              { value: 0, label: "<10%" },
              { value: 1, label: "10–25%" },
              { value: 2, label: "25–50%" },
              { value: 3, label: ">50%" },
            ],
          },
          {
            label: "5.3 ग्रीन लैंडस्केप",
            options: [
              { value: 0, label: "उच्च जल उपयोग गैर-स्थानीय + कोई स्मार्ट सिंचाई नहीं" },
              { value: 1, label: "उच्च जल उपयोग गैर-स्थानीय + स्मार्ट सिंचाई" },
              { value: 2, label: "स्थानीय प्रजाति + कोई स्मार्ट सिंचाई नहीं" },
              { value: 3, label: "स्थानीय प्रजाति + स्मार्ट सिंचाई" },
            ],
          },
          {
            label: "5.4 ग्रीन रूफ्स और ग्रीन वॉल्स",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "योजनाएं तैयार" },
              { value: 2, label: "ग्रीन रूफ्स संचालन में" },
              { value: 3, label: "ग्रीन रूफ्स + वॉल्स संचालन में" },
            ],
          },
        ],
      },
    ],
  },
  mr: {
    steps: [
      "सुरुवात",
      "भाषा",
      "संपर्क तपशील",
      "अपार्टमेंट तपशील",
      "जल व्यवस्थापन",
      "जल कार्यक्षमता",
      "भूजल शाश्वतता",
      "जल चक्र",
      "हिरवी वनस्पती",
      "पूर्वावलोकन",
      "यशस्वी",
    ],
    start: {
      title: "जल स्मृती अपार्टमेंट बिल्डिंग वॉटर स्कोअरकार्ड मूल्यांकन इनपुट फॉर्म",
      button: "मूल्यांकन सुरू करा",
    },
    language: {
      title: "तुमची भाषा निवडा",
      english: "इंग्रजी",
      hindi: "हिंदी",
      next: "पुढे",
    },
    contact: {
      title: "संपर्क व्यक्तीचा तपशील",
      fullName: "संपर्क व्यक्तीचे पूर्ण नाव",
      email: "संपर्क व्यक्तीचा ईमेल पत्ता",
      whatsapp: "संपर्क व्यक्तीचा व्हॉट्सॲप क्रमांक",
      date: "मूल्यांकनाची तारीख",
    },
    apartment: {
      title: "मूल्यांकन होत असलेल्या अपार्टमेंट बिल्डिंगबद्दल",
      name: "अपार्टमेंट बिल्डिंगचे नाव आणि पूर्ण पत्ता",
      map: "मूल्यांकन होत असलेल्या अपार्टमेंट बिल्डिंगची गुगल मॅप लिंक",
      units: "अपार्टमेंट बिल्डिंगमध्ये किती युनिट्स/फ्लॅट्स आहेत *",
    },
    buttons: {
      next: "पुढे",
      back: "मागे",
      finish: "समाप्त",
      submit: "सादर करा",
      edit: "तुमचा प्रतिसाद संपादित करा",
      cancel: "रद्द करा",
      confirm: "होय, सादर करा",
      restart: "दुसरा फॉर्म सादर करा",
      pdf: "पीडीएफ अहवाल डाउनलोड करा",
      clear: "फॉर्म साफ करा",
    },
    messages: {
      required: "आवश्यक",
      invalidEmail: "अवैध ईमेल पत्ता",
      invalidPhone: "फोन नंबर १० अंकी असावा",
      notApplicable: "लागू नाही",
      previewTitle: "तुमची सबमिशन पूर्वावलोकन करा",
      confirmSubmit: "तुम्हाला नक्कीच सबमिट करून तुमचे निकाल पाहायचे आहेत का?",
      thankYou: "धन्यवाद, {name} मूल्यांकन पूर्ण केल्याबद्दल!",
    },
    sections: [
      {
        title: "१) जल व्यवस्थापन",
        questions: [
          {
            label: "१.१ जल धोरणाची स्थिती",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "जल धोरण बनवण्याचे काम प्रगतीपथावर" },
              { value: 2, label: "जल धोरण मसुदा तयार" },
              { value: 3, label: "जल धोरण मसुदा तयार आणि कर्मचारी आणि भाडेकरूंना कळवले" },
            ],
          },
          {
            label: "१.२ जल प्रतिज्ञेची स्थिती",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "व्यवस्थापनाने जल प्रतिज्ञा घेतली आहे" },
              { value: 2, label: "व्यवस्थापन + सुविधा कर्मचारी यांनी जल प्रतिज्ञा घेतली आहे" },
              { value: 3, label: "व्यवस्थापन + सुविधा कर्मचारी + भाडेकरूंनी जल प्रतिज्ञा घेतली आहे" },
            ],
          },
          {
            label: "१.३ जल सनदेची स्थिती",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "जल सनदेचा मसुदा तयार करण्याचे काम प्रगतीपथावर" },
              { value: 2, label: "जल सनद अंतिम" },
              { value: 3, label: "जल सनद अंतिम आणि सार्वजनिकरित्या प्रदर्शित" },
            ],
          },
          {
            label: "१.४ जल बचत ध्येय आणि लक्ष्यांची स्थिती",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "काम प्रगतीपथावर आहे" },
              { value: 2, label: "जल बचत ध्येय आणि लक्ष्ये निश्चित केली आहेत" },
              { value: 3, label: "जल बचत ध्येय आणि लक्ष्ये कर्मचारी आणि भाडेकरूंना कळवली आहेत" },
            ],
          },
        ],
      },
      {
        title: "२) जल कार्यक्षमता",
        questions: [
          {
            label: "२.१ जल मीटरिंगची स्थिती",
            options: [
              { value: 0, label: "बल्क वॉटर मीटर" },
              { value: 1, label: "बल्क मीटर + सबमीटर" },
              { value: 2, label: "बल्क मीटर + सबमीटर + मासिक/साप्ताहिक देखरेख" },
              { value: 3, label: "स्मार्ट वॉटर सब मीटर" },
            ],
          },
          {
            label: "२.२ वॉटर फिक्स्चरची स्थिती (सरासरी प्रवाह दर lpm मध्ये)",
            options: [
              { value: 0, label: ">15 lpm" },
              { value: 1, label: "10–15 lpm" },
              { value: 2, label: "5–10 lpm" },
              { value: 3, label: "<5 lpm" },
            ],
          },
          {
            label: "२.३ टॉयलेट फ्लशिंगची स्थिती",
            options: [
              { value: 0, label: "सिंगल फ्लश (>12 लिटर)" },
              { value: 1, label: "सिंगल फ्लश (10–12 लिटर)" },
              { value: 2, label: "ड्युअल फ्लश (12/6 लिटर)" },
              { value: 3, label: "ड्युअल फ्लश (8/4 लिटर)" },
            ],
          },
          {
            label: "२.४ जल संवर्धन साइनेज आणि संवादाची स्थिती",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "वॉशरूममध्ये साइनेज" },
              { value: 2, label: "वॉशरूम आणि इतर भागात साइनेज" },
              { value: 3, label: "साइनेज + मासिक कर्मचारी आणि भाडेकरू जागरूकता सत्र" },
            ],
          },
          {
            label: "२.५ कूलिंग टॉवरमधील पाण्याच्या वापराची स्थिती",
            options: [
              { value: -1, label: "लागू नाही" },
              { value: 0, label: "सबमीटर नाही / सिंगल पास वापर" },
              { value: 1, label: "सबमीटर + सिंगल पास वापर" },
              { value: 2, label: "सबमीटर + पुनर्रचना फॅक्टर <3" },
              { value: 3, label: "सबमीटर + पुनर्रचना फॅक्टर >3" },
            ],
          },
          {
            label: "२.६ पाणी वापर तीव्रतेची स्थिती",
            options: [
              { value: 0, label: "सर्वोत्तम सराव बेंचमार्कपेक्षा >60% जास्त" },
              { value: 1, label: "सर्वोत्तम सराव बेंचमार्कपेक्षा 51–60% जास्त" },
              { value: 2, label: "सर्वोत्तम सराव बेंचमार्कपेक्षा 11–40% जास्त" },
              { value: 3, label: "सर्वोत्तम सराव बेंचमार्कच्या 10% च्या आत" },
            ],
          },
        ],
      },
      {
        title: "३) भूजल शाश्वतता",
        questions: [
          {
            label: "३.१ भूजल अवलंबित्व (एकूण वार्षिक पाण्याच्या %)",
            options: [
              { value: 0, label: ">50%" },
              { value: 1, label: "20–50%" },
              { value: 2, label: "5–20%" },
              { value: 3, label: "<5%" },
            ],
          },
          {
            label: "३.२ भूजल काढण्याची स्थिती",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "पंप केलेल्या तासांचे मॅन्युअल मॉनिटरिंग" },
              { value: 2, label: "मॅन्युअल मीटरिंग" },
              { value: 3, label: "स्मार्ट मीटरिंग" },
            ],
          },
          {
            label: "३.३ भूजल पुनर्भरण (काढण्याच्या %)",
            options: [
              { value: 0, label: "<20%" },
              { value: 1, label: "20–40%" },
              { value: 2, label: "40–50%" },
              { value: 3, label: ">50%" },
            ],
          },
        ],
      },
      {
        title: "४) जल चक्र",
        questions: [
          {
            label: "४.१ पावसाचे पाणी साठवण्याची स्थिती",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "<50% छतावरून पावसाचे पाणी साठवणे" },
              { value: 2, label: ">50% छतावरून पावसाचे पाणी साठवणे" },
              { value: 3, label: "छतावरील पाणी + छताव्यतिरिक्त पाणी साठवणे" },
            ],
          },
          {
            label: "४.२ ग्रेवॉटर/सांडपाणी पुनर्वापर किंवा पुनर्वापर",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "सुविधा बसवण्यासाठी क्षेत्र उपलब्ध" },
              { value: 2, label: "काम प्रगतीपथावर (डिझाइन केलेले, बांधकाम बाकी)" },
              { value: 3, label: "पुनर्वापर कार्यरत आहे" },
            ],
          },
          {
            label: "४.३ सामूहिक आरओ प्रक्रिया केलेल्या पाण्याची स्थिती",
            options: [
              { value: 0, label: "पुनर्वापर नाही – रिजेक्ट पाणी सोडले" },
              { value: 1, label: "पिण्यायोग्य नसलेल्या पुनर्वापरासाठी व्यवहार्य" },
              { value: 2, label: "अंमलबजावणीसाठी योजना तयार" },
              { value: 3, label: "रिजेक्ट पाणी पिण्यायोग्य नसलेल्या वापरासाठी पुनर्वापरले जाते" },
            ],
          },
        ],
      },
      {
        title: "५) हिरवी वनस्पती",
        questions: [
          {
            label: "५.१ ग्रीन कव्हर पॉलिसी",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "मसुदा तयार करण्याचे काम प्रगतीपथावर" },
              { value: 2, label: "अंतिम" },
              { value: 3, label: "अंतिम आणि भागधारकांसोबत शेअर केले" },
            ],
          },
          {
            label: "५.२ ग्रीन कव्हरेज क्षेत्र",
            options: [
              { value: 0, label: "<10%" },
              { value: 1, label: "10–25%" },
              { value: 2, label: "25–50%" },
              { value: 3, label: ">50%" },
            ],
          },
          {
            label: "५.३ ग्रीन लँडस्केप्स",
            options: [
              { value: 0, label: "उच्च पाणी वापरणारी परदेशी वनस्पती + स्मार्ट सिंचन नाही" },
              { value: 1, label: "उच्च पाणी वापरणारी परदेशी वनस्पती + स्मार्ट सिंचन" },
              { value: 2, label: "देशी प्रजाती + स्मार्ट सिंचन नाही" },
              { value: 3, label: "देशी प्रजाती + स्मार्ट सिंचन" },
            ],
          },
          {
            label: "५.४ ग्रीन रूफ्स आणि वॉल्स",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "योजना तयार" },
              { value: 2, label: "ग्रीन रूफ्स कार्यरत" },
              { value: 3, label: "ग्रीन रूफ्स + वॉल्स कार्यरत" },
            ],
          },
        ],
      },
    ],
  },
  te: {
    steps: [
      "ప్రారంభం",
      "భాష",
      "సంప్రదింపు వివరాలు",
      "అపార్ట్మెంట్ వివరాలు",
      "నీటి నిర్వహణ",
      "నీటి సామర్థ్యం",
      "భూగర్భజల స్థిరత్వం",
      "నీటి చక్రీయత",
      "పచ్చదనం",
      "ప్రివ్యూ",
      "విజయం",
    ],
    start: {
      title: "జల్ స్మృతి అపార్ట్‌మెంట్ బిల్డింగ్ వాటర్ స్కోర్‌కార్డ్ అసెస్‌మెంట్ ఇన్‌పుట్ ఫారమ్",
      button: "అంచనాను ప్రారంభించండి",
    },
    language: {
      title: "మీ భాషను ఎంచుకోండి",
      english: "ఆంగ్లం",
      hindi: "హిందీ",
      next: "తరువాత",
    },
    contact: {
      title: "సంప్రదింపు వ్యక్తి వివరాలు",
      fullName: "సంప్రదింపు వ్యక్తి పూర్తి పేరు",
      email: "సంప్రదింపు వ్యక్తి ఇమెయిల్ చిరునామా",
      whatsapp: "సంప్రదింపు వ్యక్తి వాట్సాప్ నంబర్",
      date: "అంచనా తేదీ",
    },
    apartment: {
      title: "అంచనా వేయబడుతున్న అపార్ట్‌మెంట్ బిల్డింగ్ గురించి",
      name: "అపార్ట్‌మెంట్ బిల్డింగ్ పేరు మరియు పూర్తి చిరునామా",
      map: "అంచనా వేయబడుతున్న అపార్ట్‌మెంట్ బిల్డింగ్ యొక్క గూగుల్ మ్యాప్ లొకేషన్ లింక్",
      units: "అపార్ట్‌మెంట్ బిల్డింగ్‌లో ఎన్ని యూనిట్లు/ఫ్లాట్లు ఉన్నాయి *",
    },
    buttons: {
      next: "తరువాత",
      back: "వెనుకకు",
      finish: "ముగించు",
      submit: "సమర్పించు",
      edit: "మీ ప్రతిస్పందనను సవరించండి",
      cancel: "రద్దు చేయి",
      confirm: "అవును, సమర్పించు",
      restart: "మరొక ఫారమ్ సమర్పించండి",
      pdf: "PDF నివేదికను డౌన్‌లోడ్ చేయండి",
      clear: "ఫారమ్ క్లియర్ చేయండి",
    },
    messages: {
      required: "అవసరం",
      invalidEmail: "చెల్లని ఇమెయిల్ చిరునామా",
      invalidPhone: "ఫోన్ నంబర్ తప్పనిసరిగా 10 అంకెలు ఉండాలి",
      notApplicable: "వర్తించదు",
      previewTitle: "మీ సమర్పణను ప్రివ్యూ చేయండి",
      confirmSubmit: "మీరు నిజంగా సమర్పించి, మీ ఫలితాలను చూడాలనుకుంటున్నారా?",
      thankYou: "ధన్యవాదాలు, {name} అంచనాను పూర్తి చేసినందుకు!",
    },
    sections: [
      {
        title: "౧) నీటి నిర్వహణ",
        questions: [
          {
            label: "౧.౧ నీటి విధానం యొక్క స్థితి",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "నీటి విధానం రూపకల్పన పురోగతిలో ఉంది" },
              { value: 2, label: "నీటి విధానం ముసాయిదా చేయబడింది" },
              { value: 3, label: "నీటి విధానం ముసాయిదా చేయబడి సిబ్బంది & అద్దెదారులకు తెలియజేయబడింది" },
            ],
          },
          {
            label: "౧.౨ నీటి ప్రతిజ్ఞ యొక్క స్థితి",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "యాజమాన్యం నీటి ప్రతిజ్ఞ చేసింది" },
              { value: 2, label: "యాజమాన్యం + ఫెసిలిటీ సిబ్బంది నీటి ప్రతిజ్ఞ చేశారు" },
              { value: 3, label: "యాజమాన్యం + ఫెసిలిటీ సిబ్బంది + అద్దెదారులు నీటి ప్రతిజ్ఞ చేశారు" },
            ],
          },
          {
            label: "౧.౩ నీటి చార్టర్ యొక్క స్థితి",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "నీటి చార్టర్ ముసాయిదా పురోగతిలో ఉంది" },
              { value: 2, label: "నీటి చార్టర్ ఖరారు చేయబడింది" },
              { value: 3, label: "నీటి చార్టర్ ఖరారు చేయబడి బహిరంగంగా ప్రదర్శించబడింది" },
            ],
          },
          {
            label: "౧.౪ నీటి పొదుపు లక్ష్యాలు & టార్గెట్ల స్థితి",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "పని పురోగతిలో ఉంది" },
              { value: 2, label: "నీటి పొదుపు లక్ష్యాలు & టార్గెట్లు నిర్దేశించబడ్డాయి" },
              { value: 3, label: "నీటి పొదుపు లక్ష్యాలు & టార్గెట్లు సిబ్బంది & అద్దెదారులకు తెలియజేయబడ్డాయి" },
            ],
          },
        ],
      },
      {
        title: "౨) నీటి సామర్థ్యం",
        questions: [
          {
            label: "౨.౧ నీటి మీటరింగ్ స్థితి",
            options: [
              { value: 0, label: "బల్క్ వాటర్ మీటర్" },
              { value: 1, label: "బల్క్ మీటర్ + సబ్‌మీటర్" },
              { value: 2, label: "బల్క్ మీటర్ + సబ్‌మీటర్ + నెలవారీ/వారపు పర్యవేక్షణ" },
              { value: 3, label: "స్మార్ట్ వాటర్ సబ్ మీటర్లు" },
            ],
          },
          {
            label: "౨.౨ నీటి ఫిక్చర్‌ల స్థితి (సగటు ప్రవాహ రేటు lpmలో)",
            options: [
              { value: 0, label: ">15 lpm" },
              { value: 1, label: "10–15 lpm" },
              { value: 2, label: "5–10 lpm" },
              { value: 3, label: "<5 lpm" },
            ],
          },
          {
            label: "౨.౩ టాయిలెట్ ఫ్లషింగ్ స్థితి",
            options: [
              { value: 0, label: "సింగిల్ ఫ్లష్ (>12 లీటర్లు)" },
              { value: 1, label: "సింగిల్ ఫ్లష్ (10–12 లీటర్లు)" },
              { value: 2, label: "డ్యూయల్ ఫ్లష్ (12/6 లీటర్లు)" },
              { value: 3, label: "డ్యూయల్ ఫ్లష్ (8/4 లీటర్లు)" },
            ],
          },
          {
            label: "౨.౪ నీటి సంరక్షణ సంకేతాలు & కమ్యూనికేషన్ స్థితి",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "వాష్‌రూమ్‌లలో సంకేతాలు" },
              { value: 2, label: "వాష్‌రూమ్‌లు మరియు ఇతర ప్రాంతాలలో సంకేతాలు" },
              { value: 3, label: "సంకేతాలు + నెలవారీ సిబ్బంది & అద్దెదారుల అవగాహన సెషన్‌లు" },
            ],
          },
          {
            label: "౨.౫ కూలింగ్ టవర్‌లో నీటి వినియోగం స్థితి",
            options: [
              { value: -1, label: "వర్తించదు" },
              { value: 0, label: "సబ్‌మీటర్ లేదు / సింగిల్ పాస్ వినియోగం" },
              { value: 1, label: "సబ్‌మీటర్ + సింగిల్ పాస్ వినియోగం" },
              { value: 2, label: "సబ్‌మీటర్ + రీసర్క్యులేషన్ ఫ్యాక్టర్ <3" },
              { value: 3, label: "సబ్‌మీటర్ + రీసర్క్యులేషన్ ఫ్యాక్టర్ >3" },
            ],
          },
          {
            label: "౨.౬ నీటి వినియోగ తీవ్రత స్థితి",
            options: [
              { value: 0, label: "ఉత్తమ అభ్యాస బెంచ్‌మార్క్ కంటే >60% ఎక్కువ" },
              { value: 1, label: "ఉత్తమ అభ్యాస బెంచ్‌మార్క్ కంటే 51–60% ఎక్కువ" },
              { value: 2, label: "ఉత్తమ అభ్యాస బెంచ్‌మార్క్ కంటే 11–40% ఎక్కువ" },
              { value: 3, label: "ఉత్తమ అభ్యాస బెంచ్‌మార్క్‌లో 10% లోపల" },
            ],
          },
        ],
      },
      {
        title: "౩) భూగర్భజల స్థిరత్వం",
        questions: [
          {
            label: "౩.౧ భూగర్భజల ఆధారపడటం (మొత్తం వార్షిక నీటిలో %)",
            options: [
              { value: 0, label: ">50%" },
              { value: 1, label: "20–50%" },
              { value: 2, label: "5–20%" },
              { value: 3, label: "<5%" },
            ],
          },
          {
            label: "౩.౨ భూగర్భజల వెలికితీత స్థితి",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "పంప్ చేసిన గంటల మాన్యువల్ పర్యవేక్షణ" },
              { value: 2, label: "మాన్యువల్ మీటరింగ్" },
              { value: 3, label: "స్మార్ట్ మీటరింగ్" },
            ],
          },
          {
            label: "౩.౩ భూగర్భజల రీఛార్జ్ (వెలికితీతలో %)",
            options: [
              { value: 0, label: "<20%" },
              { value: 1, label: "20–40%" },
              { value: 2, label: "40–50%" },
              { value: 3, label: ">50%" },
            ],
          },
        ],
      },
      {
        title: "౪) నీటి చక్రీయత",
        questions: [
          {
            label: "౪.౧ వర్షపు నీటి సేకరణ స్థితి",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "<50% పైకప్పు నుండి వర్షపు నీటి సేకరణ" },
              { value: 2, label: ">50% పైకప్పు నుండి వర్షపు నీటి సేకరణ" },
              { value: 3, label: "పైకప్పు నీరు + పైకప్పు కాని నీటి సేకరణ" },
            ],
          },
          {
            label: "౪.౨ గ్రేవాటర్/మురుగునీటి రీసైక్లింగ్ లేదా పునర్వినియోగం",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "సౌకర్యం ఏర్పాటుకు ఫుట్‌ప్రింట్ ప్రాంతం అందుబాటులో ఉంది" },
              { value: 2, label: "పని పురోగతిలో ఉంది (రూపకల్పన చేయబడింది, నిర్మాణం పెండింగ్‌లో ఉంది)" },
              { value: 3, label: "రీసైక్లింగ్ పనిచేస్తోంది" },
            ],
          },
          {
            label: "౪.౩ సామూహిక RO శుద్ధి చేసిన నీటి స్థితి",
            options: [
              { value: 0, label: "పునర్వినియోగం లేదు – రిజెక్ట్ నీరు విడుదల చేయబడింది" },
              { value: 1, label: "త్రాగలేని పునర్వినియోగానికి సాధ్యం" },
              { value: 2, label: "అమలు కోసం ప్రణాళికలు సిద్ధంగా ఉన్నాయి" },
              { value: 3, label: "రిజెక్ట్ నీరు త్రాగలేని ఉపయోగం కోసం పునర్వినియోగించబడింది" },
            ],
          },
        ],
      },
      {
        title: "౫) పచ్చదనం",
        questions: [
          {
            label: "౫.౧ గ్రీన్ కవర్ పాలసీ",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "ముసాయిదా పురోగతిలో ఉంది" },
              { value: 2, label: "ఖరారు చేయబడింది" },
              { value: 3, label: "ఖరారు చేయబడి వాటాదారులతో పంచుకోబడింది" },
            ],
          },
          {
            label: "౫.౨ గ్రీన్ కవరేజ్ ఏరియా",
            options: [
              { value: 0, label: "<10%" },
              { value: 1, label: "10–25%" },
              { value: 2, label: "25–50%" },
              { value: 3, label: ">50%" },
            ],
          },
          {
            label: "౫.౩ గ్రీన్ ల్యాండ్‌స్కేప్స్",
            options: [
              { value: 0, label: "అధిక నీటి స్థానికేతర మొక్కలు + స్మార్ట్ నీటిపారుదల లేదు" },
              { value: 1, label: "అధిక నీటి స్థానికేతర మొక్కలు + స్మార్ట్ నీటిపారుదల" },
              { value: 2, label: "స్థానిక జాతులు + స్మార్ట్ నీటిపారుదల లేదు" },
              { value: 3, label: "స్థానిక జాతులు + స్మార్ట్ నీటిపారుదల" },
            ],
          },
          {
            label: "౫.౪ గ్రీన్ రూఫ్‌లు & వాల్స్",
            options: [
              { value: 0, label: "ఏదీ లేదు" },
              { value: 1, label: "ప్రణాళికలు సిద్ధంగా ఉన్నాయి" },
              { value: 2, label: "గ్రీన్ రూఫ్‌లు పనిచేస్తున్నాయి" },
              { value: 3, label: "గ్రీన్ రూఫ్‌లు + వాల్స్ పనిచేస్తున్నాయి" },
            ],
          },
        ],
      },
    ],
  },
  kn: {
    steps: [
      "ಪ್ರಾರಂಭ",
      "ಭಾಷೆ",
      "ಸಂಪರ್ಕ ವಿವರಗಳು",
      "ಅಪಾರ್ಟ್ಮೆಂಟ್ ವಿವರಗಳು",
      "ನೀರಿನ ನಿರ್ವಹಣೆ",
      "ನೀರಿನ ದಕ್ಷತೆ",
      "ಅಂತರ್ಜಲ ಸುಸ್ಥಿರತೆ",
      "ನೀರಿನ ವೃತ್ತಾಕಾರ",
      "ಹಸಿರು ಸಸ್ಯವರ್ಗ",
      "ಮುನ್ನೋಟ",
      "ಯಶಸ್ಸು",
    ],
    start: {
      title: "ಜಲ ಸ್ಮೃತಿ ಅಪಾರ್ಟ್ಮೆಂಟ್ ಕಟ್ಟಡದ ನೀರಿನ ಸ್ಕೋರ್‌ಕಾರ್ಡ್ ಮೌಲ್ಯಮಾಪನ ಇನ್‌ಪುಟ್ ಫಾರ್ಮ್",
      button: "ಮೌಲ್ಯಮಾಪನವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
    },
    language: {
      title: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      english: "ಆಂಗ್ಲ",
      hindi: "ಹಿಂದಿ",
      next: "ಮುಂದೆ",
    },
    contact: {
      title: "ಸಂಪರ್ಕ ವ್ಯಕ್ತಿಯ ವಿವರಗಳು",
      fullName: "ಸಂಪರ್ಕ ವ್ಯಕ್ತಿಯ ಪೂರ್ಣ ಹೆಸರು",
      email: "ಸಂಪರ್ಕ ವ್ಯಕ್ತಿಯ ಇಮೇಲ್ ವಿಳಾಸ",
      whatsapp: "ಸಂಪರ್ಕ ವ್ಯಕ್ತಿಯ ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ",
      date: "ಮೌಲ್ಯಮಾಪನದ ದಿನಾಂಕ",
    },
    apartment: {
      title: "ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗುತ್ತಿರುವ ಅಪಾರ್ಟ್ಮೆಂಟ್ ಕಟ್ಟಡದ ಬಗ್ಗೆ",
      name: "ಅಪಾರ್ಟ್ಮೆಂಟ್ ಕಟ್ಟಡದ ಹೆಸರು ಮತ್ತು ಪೂರ್ಣ ವಿಳಾಸ",
      map: "ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗುತ್ತಿರುವ ಅಪಾರ್ಟ್ಮೆಂಟ್ ಕಟ್ಟಡದ ಗೂಗಲ್ ಮ್ಯಾಪ್ ಸ್ಥಳ ಲಿಂಕ್",
      units: "ಅಪಾರ್ಟ್ಮೆಂಟ್ ಕಟ್ಟಡದಲ್ಲಿ ಎಷ್ಟು ಘಟಕಗಳು/ಫ್ಲಾಟ್‌ಗಳಿವೆ *",
    },
    buttons: {
      next: "ಮುಂದೆ",
      back: "ಹಿಂದೆ",
      finish: "ಮುಕ್ತಾಯ",
      submit: "ಸಲ್ಲಿಸು",
      edit: "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಸಂಪಾದಿಸಿ",
      cancel: "ರದ್ದುಮಾಡು",
      confirm: "ಹೌದು, ಸಲ್ಲಿಸು",
      restart: "ಮತ್ತೊಂದು ಫಾರ್ಮ್ ಸಲ್ಲಿಸಿ",
      pdf: "ಪಿಡಿಎಫ್ ವರದಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
      clear: "ಫಾರ್ಮ್ ತೆರವುಗೊಳಿಸಿ",
    },
    messages: {
      required: "ಅಗತ್ಯವಿದೆ",
      invalidEmail: "ಅಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸ",
      invalidPhone: "ಫೋನ್ ಸಂಖ್ಯೆ ನಿಖರವಾಗಿ 10 ಅಂಕೆಗಳಾಗಿರಬೇಕು",
      notApplicable: "ಅನ್ವಯಿಸುವುದಿಲ್ಲ",
      previewTitle: "ನಿಮ್ಮ ಸಲ್ಲಿಕೆಯನ್ನು ಮುನ್ನೋಟಿಸಿ",
      confirmSubmit: "ನೀವು ಖಚಿತವಾಗಿ ಸಲ್ಲಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಫಲಿತಾಂಶಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಬಯಸುವಿರಾ?",
      thankYou: "ಧನ್ಯವಾದಗಳು, {name} ಮೌಲ್ಯಮಾಪನವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದಕ್ಕಾಗಿ!",
    },
    sections: [
      {
        title: "೧) ನೀರಿನ ನಿರ್ವಹಣೆ",
        questions: [
          {
            label: "೧.೧ ನೀರಿನ ನೀತಿಯ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ನೀರಿನ ನೀತಿ ರಚನೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ" },
              { value: 2, label: "ನೀರಿನ ನೀತಿಯ ಕರಡು ಸಿದ್ಧವಾಗಿದೆ" },
              { value: 3, label: "ನೀರಿನ ನೀತಿಯ ಕರಡು ಸಿದ್ಧವಾಗಿದೆ ಮತ್ತು ಸಿಬ್ಬಂದಿ ಮತ್ತು ಬಾಡಿಗೆದಾರರಿಗೆ ತಿಳಿಸಲಾಗಿದೆ" },
            ],
          },
          {
            label: "೧.೨ ನೀರಿನ ಪ್ರತಿಜ್ಞೆಯ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ನಿರ್ವಹಣೆಯವರು ನೀರಿನ ಪ್ರತಿಜ್ಞೆ ತೆಗೆದುಕೊಂಡಿದ್ದಾರೆ" },
              { value: 2, label: "ನಿರ್ವಹಣೆ + ಸೌಲಭ್ಯ ಸಿಬ್ಬಂದಿ ನೀರಿನ ಪ್ರತಿಜ್ಞೆ ತೆಗೆದುಕೊಂಡಿದ್ದಾರೆ" },
              { value: 3, label: "ನಿರ್ವಹಣೆ + ಸೌಲಭ್ಯ ಸಿಬ್ಬಂದಿ + ಬಾಡಿಗೆದಾರರು ನೀರಿನ ಪ್ರತಿಜ್ಞೆ ತೆಗೆದುಕೊಂಡಿದ್ದಾರೆ" },
            ],
          },
          {
            label: "೧.೩ ನೀರಿನ ಚಾರ್ಟರ್ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ನೀರಿನ ಚಾರ್ಟರ್ ಕರಡು ರಚನೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ" },
              { value: 2, label: "ನೀರಿನ ಚಾರ್ಟರ್ ಅಂತಿಮಗೊಂಡಿದೆ" },
              { value: 3, label: "ನೀರಿನ ಚಾರ್ಟರ್ ಅಂತಿಮಗೊಂಡಿದೆ ಮತ್ತು ಸಾರ್ವಜನಿಕವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ" },
            ],
          },
          {
            label: "೧.೪ ನೀರು ಉಳಿತಾಯದ ಗುರಿಗಳು ಮತ್ತು ಗುರಿಗಳ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಕೆಲಸ ಪ್ರಗತಿಯಲ್ಲಿದೆ" },
              { value: 2, label: "ನೀರು ಉಳಿತಾಯದ ಗುರಿಗಳು ಮತ್ತು ಗುರಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಲಾಗಿದೆ" },
              { value: 3, label: "ನೀರು ಉಳಿತಾಯದ ಗುರಿಗಳು ಮತ್ತು ಗುರಿಗಳನ್ನು ಸಿಬ್ಬಂದಿ ಮತ್ತು ಬಾಡಿಗೆದಾರರಿಗೆ ತಿಳಿಸಲಾಗಿದೆ" },
            ],
          },
        ],
      },
      {
        title: "೨) ನೀರಿನ ದಕ್ಷತೆ",
        questions: [
          {
            label: "೨.೧ ನೀರಿನ ಮೀಟರಿಂಗ್ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಬೃಹತ್ ನೀರಿನ ಮೀಟರ್" },
              { value: 1, label: "ಬೃಹತ್ ಮೀಟರ್ + ಸಬ್‌ಮೀಟರ್" },
              { value: 2, label: "ಬೃಹತ್ ಮೀಟರ್ + ಸಬ್‌ಮೀಟರ್ + ಮಾಸಿಕ/ಸಾಪ್ತಾಹಿಕ ಮೇಲ್ವಿಚಾರಣೆ" },
              { value: 3, label: "ಸ್ಮಾರ್ಟ್ ವಾಟರ್ ಸಬ್ ಮೀಟರ್‌ಗಳು" },
            ],
          },
          {
            label: "೨.೨ ನೀರಿನ ಫಿಕ್ಸ್ಚರ್‌ಗಳ ಸ್ಥಿತಿ (ಸರಾಸರಿ ಹರಿವಿನ ದರ lpm ನಲ್ಲಿ)",
            options: [
              { value: 0, label: ">15 lpm" },
              { value: 1, label: "10–15 lpm" },
              { value: 2, label: "5–10 lpm" },
              { value: 3, label: "<5 lpm" },
            ],
          },
          {
            label: "೨.೩ ಶೌಚಾಲಯ ಫ್ಲಶಿಂಗ್ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಏಕ ಫ್ಲಶ್ (>12 ಲೀಟರ್)" },
              { value: 1, label: "ಏಕ ಫ್ಲಶ್ (10–12 ಲೀಟರ್)" },
              { value: 2, label: "ದ್ವಿ ಫ್ಲಶ್ (12/6 ಲೀಟರ್)" },
              { value: 3, label: "ದ್ವಿ ಫ್ಲಶ್ (8/4 ಲೀಟರ್)" },
            ],
          },
          {
            label: "೨.೪ ನೀರು ಸಂರಕ್ಷಣೆ ಸಂಕೇತಗಳು ಮತ್ತು ಸಂವಹನದ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಶೌಚಾಲಯಗಳಲ್ಲಿ ಸಂಕೇತಗಳು" },
              { value: 2, label: "ಶೌಚಾಲಯಗಳಲ್ಲಿ ಮತ್ತು ಇತರ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸಂಕೇತಗಳು" },
              { value: 3, label: "ಸಂಕೇತಗಳು + ಮಾಸಿಕ ಸಿಬ್ಬಂದಿ ಮತ್ತು ಬಾಡಿಗೆದಾರರ ಜಾಗೃತಿ ಅಧಿವೇಶನಗಳು" },
            ],
          },
          {
            label: "೨.೫ ಕೂಲಿಂಗ್ ಟವರ್‌ನಲ್ಲಿ ನೀರಿನ ಬಳಕೆಯ ಸ್ಥಿತಿ",
            options: [
              { value: -1, label: "ಅನ್ವಯಿಸುವುದಿಲ್ಲ" },
              { value: 0, label: "ಸಬ್‌ಮೀಟರ್ ಇಲ್ಲ / ಏಕ ಪಾಸ್ ಬಳಕೆ" },
              { value: 1, label: "ಸಬ್‌ಮೀಟರ್ + ಏಕ ಪಾಸ್ ಬಳಕೆ" },
              { value: 2, label: "ಸಬ್‌ಮೀಟರ್ + ಮರುಬಳಕೆ ಅಂಶ <3" },
              { value: 3, label: "ಸಬ್‌ಮೀಟರ್ + ಮರುಬಳಕೆ ಅಂಶ >3" },
            ],
          },
          {
            label: "೨.೬ ನೀರಿನ ಬಳಕೆಯ ತೀವ್ರತೆಯ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸದ ಮಾನದಂಡಕ್ಕಿಂತ >60% ಹೆಚ್ಚು" },
              { value: 1, label: "ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸದ ಮಾನದಂಡಕ್ಕಿಂತ 51–60% ಹೆಚ್ಚು" },
              { value: 2, label: "ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸದ ಮಾನದಂಡಕ್ಕಿಂತ 11–40% ಹೆಚ್ಚು" },
              { value: 3, label: "ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸದ ಮಾನದಂಡದ 10% ಒಳಗೆ" },
            ],
          },
        ],
      },
      {
        title: "೩) ಅಂತರ್ಜಲ ಸುಸ್ಥಿರತೆ",
        questions: [
          {
            label: "೩.೧ ಅಂತರ್ಜಲ ಅವಲಂಬನೆ (ಒಟ್ಟು ವಾರ್ಷಿಕ ನೀರಿನ %)",
            options: [
              { value: 0, label: ">50%" },
              { value: 1, label: "20–50%" },
              { value: 2, label: "5–20%" },
              { value: 3, label: "<5%" },
            ],
          },
          {
            label: "೩.೨ ಅಂತರ್ಜಲ ಹೊರತೆಗೆಯುವಿಕೆಯ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಪಂಪ್ ಮಾಡಿದ ಗಂಟೆಗಳ ಹಸ್ತಚಾಲಿತ ಮೇಲ್ವಿಚಾರಣೆ" },
              { value: 2, label: "ಹಸ್ತಚಾಲಿತ ಮೀಟರಿಂಗ್" },
              { value: 3, label: "ಸ್ಮಾರ್ಟ್ ಮೀಟರಿಂಗ್" },
            ],
          },
          {
            label: "೩.೩ ಅಂತರ್ಜಲ ಮರುಪೂರಣ (ಹೊರತೆಗೆಯುವಿಕೆಯ %)",
            options: [
              { value: 0, label: "<20%" },
              { value: 1, label: "20–40%" },
              { value: 2, label: "40–50%" },
              { value: 3, label: ">50%" },
            ],
          },
        ],
      },
      {
        title: "೪) ನೀರಿನ ವೃತ್ತಾಕಾರ",
        questions: [
          {
            label: "೪.೧ ಮಳೆನೀರು ಕೊಯ್ಲು ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "<50% ಛಾವಣಿಯಿಂದ ಮಳೆನೀರು ಕೊಯ್ಲು" },
              { value: 2, label: ">50% ಛಾವಣಿಯಿಂದ ಮಳೆನೀರು ಕೊಯ್ಲು" },
              { value: 3, label: "ಛಾವಣಿ ನೀರು + ಛಾವಣಿಯೇತರ ನೀರು ಕೊಯ್ಲು" },
            ],
          },
          {
            label: "೪.೨ ಬೂದು ನೀರು/ಕೊಳಚೆನೀರಿನ ಮರುಬಳಕೆ ಅಥವಾ ಪುನರ್ಬಳಕೆ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಸೌಲಭ್ಯವನ್ನು ಸ್ಥಾಪಿಸಲು ಸ್ಥಳ ಲಭ್ಯವಿದೆ" },
              { value: 2, label: "ಕೆಲಸ ಪ್ರಗತಿಯಲ್ಲಿದೆ (ವಿನ್ಯಾಸಗೊಂಡಿದೆ, ನಿರ್ಮಾಣ ಬಾಕಿ)" },
              { value: 3, label: "ಮರುಬಳಕೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ" },
            ],
          },
          {
            label: "೪.೩ ಸಾಮೂಹಿಕ ಆರ್‌ಒ ಸಂಸ್ಕರಿಸಿದ ನೀರಿನ ಸ್ಥಿತಿ",
            options: [
              { value: 0, label: "ಪುನರ್ಬಳಕೆ ಇಲ್ಲ – ತಿರಸ್ಕರಿಸಿದ ನೀರನ್ನು ಹೊರಹಾಕಲಾಗಿದೆ" },
              { value: 1, label: "ಕುಡಿಯಲು ಯೋಗ್ಯವಲ್ಲದ ಪುನರ್ಬಳಕೆಗೆ ಕಾರ್ಯಸಾಧ್ಯ" },
              { value: 2, label: "ಅನುಷ್ಠಾನಕ್ಕಾಗಿ ಯೋಜನೆಗಳು ಸಿದ್ಧವಾಗಿವೆ" },
              { value: 3, label: "ತಿರಸ್ಕರಿಸಿದ ನೀರನ್ನು ಕುಡಿಯಲು ಯೋಗ್ಯವಲ್ಲದ ಬಳಕೆಗಾಗಿ ಪುನರ್ಬಳಸಲಾಗಿದೆ" },
            ],
          },
        ],
      },
      {
        title: "೫) ಹಸಿರು ಸಸ್ಯವರ್ಗ",
        questions: [
          {
            label: "೫.೧ ಹಸಿರು ಹೊದಿಕೆ ನೀತಿ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಕರಡು ರಚನೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ" },
              { value: 2, label: "ಅಂತಿಮಗೊಂಡಿದೆ" },
              { value: 3, label: "ಅಂತಿಮಗೊಂಡಿದೆ ಮತ್ತು ಪಾಲುದಾರರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ" },
            ],
          },
          {
            label: "೫.೨ ಹಸಿರು ವ್ಯಾಪ್ತಿ ಪ್ರದೇಶ",
            options: [
              { value: 0, label: "<10%" },
              { value: 1, label: "10–25%" },
              { value: 2, label: "25–50%" },
              { value: 3, label: ">50%" },
            ],
          },
          {
            label: "೫.೩ ಹಸಿರು ಭೂದೃಶ್ಯಗಳು",
            options: [
              { value: 0, label: "ಹೆಚ್ಚು ನೀರು ಬಳಸುವ ಸ್ಥಳೀಯವಲ್ಲದ + ಸ್ಮಾರ್ಟ್ ನೀರಾವರಿ ಇಲ್ಲ" },
              { value: 1, label: "ಹೆಚ್ಚು ನೀರು ಬಳಸುವ ಸ್ಥಳೀಯವಲ್ಲದ + ಸ್ಮಾರ್ಟ್ ನೀರಾವರಿ" },
              { value: 2, label: "ಸ್ಥಳೀಯ ಪ್ರಭೇದಗಳು + ಸ್ಮಾರ್ಟ್ ನೀರಾವರಿ ಇಲ್ಲ" },
              { value: 3, label: "ಸ್ಥಳೀಯ ಪ್ರಭೇದಗಳು + ಸ್ಮಾರ್ಟ್ ನೀರಾವರಿ" },
            ],
          },
          {
            label: "೫.೪ ಹಸಿರು ಛಾವಣಿಗಳು ಮತ್ತು ಗೋಡೆಗಳು",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಯೋಜನೆಗಳು ಸಿದ್ಧವಾಗಿವೆ" },
              { value: 2, label: "ಹಸಿರು ಛಾವಣಿಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿವೆ" },
              { value: 3, label: "ಹಸಿರು ಛಾವಣಿಗಳು + ಗೋಡೆಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿವೆ" },
            ],
          },
        ],
      },
    ],
  },
  or: {
    steps: [
      "ଆରମ୍ଭ",
      "ଭାଷା",
      "ଯୋଗାଯୋଗ ବିବରଣୀ",
      "ଆପାର୍ଟମେଣ୍ଟ ବିବରଣୀ",
      "ଜଳ ପରିଚାଳନା",
      "ଜଳ ଦକ୍ଷତା",
      "ଭୂତଳ ଜଳ ସ୍ଥିରତା",
      "ଜଳ ଚକ୍ରୀୟତା",
      "ସବୁଜ ବନସ୍ପତି",
      "ପୂର୍ବାବଲୋକନ",
      "ସଫଳତା",
    ],
    start: {
      title: "ଜଳ ସ୍ମୃତି ଆପାର୍ଟମେଣ୍ଟ ବିଲଡିଂ ୱାଟର ସ୍କୋରକାର୍ଡ ମୂଲ୍ୟାଙ୍କନ ଇନପୁଟ ଫର୍ମ",
      button: "ମୂଲ୍ୟାଙ୍କନ ଆରମ୍ଭ କରନ୍ତୁ",
    },
    language: {
      title: "ଆପଣଙ୍କ ଭାଷା ଚୟନ କରନ୍ତୁ",
      english: "ଇଂରାଜୀ",
      hindi: "ହିନ୍ଦୀ",
      next: "ପରବର୍ତ୍ତୀ",
    },
    contact: {
      title: "ଯୋଗାଯୋଗ ବ୍ୟକ୍ତିଙ୍କ ବିବରଣୀ",
      fullName: "ଯୋଗାଯୋଗ ବ୍ୟକ୍ତିଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ନାମ",
      email: "ଯୋଗାଯୋଗ ବ୍ୟକ୍ତିଙ୍କ ଇମେଲ ଠିକଣା",
      whatsapp: "ଯୋଗାଯୋଗ ବ୍ୟକ୍ତିଙ୍କ ହ୍ଵାଟ୍ସଆପ୍ ନମ୍ବର",
      date: "ମୂଲ୍ୟାଙ୍କନ ତାରିଖ",
    },
    apartment: {
      title: "ମୂଲ୍ୟାଙ୍କନ କରାଯାଉଥିବା ଆପାର୍ଟମେଣ୍ଟ ବିଲଡିଂ ବିଷୟରେ",
      name: "ଆପାର୍ଟମେଣ୍ଟ ବିଲଡିଂର ନାମ ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ ଠିକଣା",
      map: "ମୂଲ୍ୟାଙ୍କନ କରାଯାଉଥିବା ଆପାର୍ଟମେଣ୍ଟ ବିଲଡିଂର ଗୁଗଲ୍ ମ୍ୟାପ୍ ଲୋକେସନ୍ ଲିଙ୍କ୍",
      units: "ଆପାର୍ଟମେଣ୍ଟ ବିଲଡିଂରେ କେତୋଟି ୟୁନିଟ୍/ଫ୍ଲାଟ୍ ଅଛି *",
    },
    buttons: {
      next: "ପରବର୍ତ୍ତୀ",
      back: "ପଛକୁ",
      finish: "ସମାପ୍ତ",
      submit: "ଦାଖଲ କରନ୍ତୁ",
      edit: "ଆପଣଙ୍କ ପ୍ରତିକ୍ରିୟା ସମ୍ପାଦନା କରନ୍ତୁ",
      cancel: "ବାତିଲ କରନ୍ତୁ",
      confirm: "ହଁ, ଦାଖଲ କରନ୍ତୁ",
      restart: "ଅନ୍ୟ ଏକ ଫର୍ମ ଦାଖଲ କରନ୍ତୁ",
      pdf: "PDF ରିପୋର୍ଟ ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
      clear: "ଫର୍ମ ସଫା କରନ୍ତୁ",
    },
    messages: {
      required: "ଆବଶ୍ୟକ",
      invalidEmail: "ଅବୈଧ ଇମେଲ ଠିକଣା",
      invalidPhone: "ଫୋନ୍ ନମ୍ବର ଠିକ୍ ୧୦ ଅଙ୍କ ବିଶିଷ୍ଟ ହେବା ଆବଶ୍ୟକ",
      notApplicable: "ପ୍ରଯୁଜ୍ୟ ନୁହେଁ",
      previewTitle: "ଆପଣଙ୍କ ଦାଖଲର ପୂର୍ବାବଲୋକନ କରନ୍ତୁ",
      confirmSubmit: "ଆପଣ ନିଶ୍ଚିତ ଭାବରେ ଦାଖଲ କରି ଆପଣଙ୍କ ଫଳାଫଳ ଦେଖିବାକୁ ଚାହୁଁଛନ୍ତି କି?",
      thankYou: "ଧନ୍ୟବାଦ, {name} ମୂଲ୍ୟାଙ୍କନ ସମ୍ପୂର୍ଣ୍ଣ କରିଥିବାରୁ!",
    },
    sections: [
      {
        title: "୧) ଜଳ ପରିଚାଳନା",
        questions: [
          {
            label: "୧.୧ ଜଳ ନୀତିର ସ୍ଥିତି",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ଜଳ ନୀତି ପ୍ରସ୍ତୁତି ପ୍ରକ୍ରିୟା ଚାଲୁଅଛି" },
              { value: 2, label: "ଜଳ ନୀତିର ଚିଠା ପ୍ରସ୍ତୁତ" },
              { value: 3, label: "ଜଳ ନୀତିର ଚିଠା ପ୍ରସ୍ତୁତ ଏବଂ କର୍ମଚାରୀ ଓ ଭଡାଟିଆମାନଙ୍କୁ ଜଣାଯାଇଛି" },
            ],
          },
          {
            label: "୧.୨ ଜଳ ଶପଥର ସ୍ଥିତି",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ପରିଚାଳନା ଏକ ଜଳ ଶପଥ ନେଇଛନ୍ତି" },
              { value: 2, label: "ପରିଚାଳନା + ସୁବିଧା କର୍ମଚାରୀ ଏକ ଜଳ ଶପଥ ନେଇଛନ୍ତି" },
              { value: 3, label: "ପରିଚାଳନା + ସୁବିଧା କର୍ମଚାରୀ + ଭଡାଟିଆମାନେ ଏକ ଜଳ ଶପଥ ନେଇଛନ୍ତି" },
            ],
          },
          {
            label: "୧.୩ ଜଳ ଚାର୍ଟରର ସ୍ଥିତି",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ଜଳ ଚାର୍ଟରର ଚିଠା ପ୍ରସ୍ତୁତି ଚାଲୁଅଛି" },
              { value: 2, label: "ଜଳ ଚାର୍ଟର ଚୂଡାନ୍ତ ହୋଇଛି" },
              { value: 3, label: "ଜଳ ଚାର୍ଟର ଚୂଡାନ୍ତ ହୋଇଛି ଏବଂ ସର୍ବସାଧାରଣରେ ପ୍ରଦର୍ଶିତ ହୋଇଛି" },
            ],
          },
          {
            label: "୧.୪ ଜଳ ସଞ୍ଚୟ ଲକ୍ଷ୍ୟ ଓ ଉଦ୍ଦେଶ୍ୟର ସ୍ଥିତି",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "କାର୍ଯ୍ୟ ଚାଲୁଅଛି" },
              { value: 2, label: "ଜଳ ସଞ୍ଚୟ ଲକ୍ଷ୍ୟ ଓ ଉଦ୍ଦେଶ୍ୟ ସ୍ଥିର କରାଯାଇଛି" },
              { value: 3, label: "ଜଳ ସଞ୍ଚୟ ଲକ୍ଷ୍ୟ ଓ ଉଦ୍ଦେଶ୍ୟ କର୍ମଚାରୀ ଓ ଭଡାଟିଆମାନଙ୍କୁ ଜଣାଯାଇଛି" },
            ],
          },
        ],
      },
      {
        title: "୨) ଜଳ ଦକ୍ଷତା",
        questions: [
          {
            label: "୨.୧ ଜଳ ମିଟରିଂର ସ୍ଥିତି",
            options: [
              { value: 0, label: "ବଲ୍କ ଜଳ ମିଟର" },
              { value: 1, label: "ବଲ୍କ ମିଟର + ସବମିଟର" },
              { value: 2, label: "ବଲ୍କ ମିଟର + ସବମିଟର + ମାସିକ/ସାପ୍ତାହିକ ମନିଟରିଂ" },
              { value: 3, label: "ସ୍ମାର୍ଟ ୱାଟର ସବ୍ ମିଟର" },
            ],
          },
          {
            label: "୨.୨ ଜଳ ଫିକ୍ସଚରର ସ୍ଥିତି (lpm ରେ ହାରାହାରି ପ୍ରବାହ ହାର)",
            options: [
              { value: 0, label: ">15 lpm" },
              { value: 1, label: "10–15 lpm" },
              { value: 2, label: "5–10 lpm" },
              { value: 3, label: "<5 lpm" },
            ],
          },
          {
            label: "୨.୩ ଶୌଚାଳୟ ଫ୍ଲସିଂର ସ୍ଥିତି",
            options: [
              { value: 0, label: "ଏକକ ଫ୍ଲସ୍ (>12 ଲିଟର)" },
              { value: 1, label: "ଏକକ ଫ୍ଲସ୍ (10–12 ଲିଟର)" },
              { value: 2, label: "ଡୁଆଲ୍ ଫ୍ଲସ୍ (12/6 ଲିଟର)" },
              { value: 3, label: "ଡୁଆଲ୍ ଫ୍ଲସ୍ (8/4 ଲିଟର)" },
            ],
          },
          {
            label: "୨.୪ ଜଳ ସଂରକ୍ଷଣ ସଙ୍କେତ ଓ ଯୋଗାଯୋଗର ସ୍ଥିତି",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ଶୌଚାଳୟରେ ସଙ୍କେତ" },
              { value: 2, label: "ଶୌଚାଳୟ ଏବଂ ଅନ୍ୟାନ୍ୟ ସ୍ଥାନରେ ସଙ୍କେତ" },
              { value: 3, label: "ସଙ୍କେତ + ମାସିକ କର୍ମଚାରୀ ଓ ଭଡାଟିଆ ସଚେତନତା ଅଧିବେଶନ" },
            ],
          },
          {
            label: "୨.୫ କୁଲିଂ ଟାୱାରରେ ଜଳ ବ୍ୟବହାରର ସ୍ଥିତି",
            options: [
              { value: -1, label: "ପ୍ରଯୁଜ୍ୟ ନୁହେଁ" },
              { value: 0, label: "କୌଣସି ସବମିଟର ନାହିଁ / ଏକକ ପାସ୍ ବ୍ୟବହାର" },
              { value: 1, label: "ସବମିଟର + ଏକକ ପାସ୍ ବ୍ୟବହାର" },
              { value: 2, label: "ସବମିଟର + ପୁନଃପ୍ରଚଳନ ଫ୍ୟାକ୍ଟର୍ <3" },
              { value: 3, label: "ସବମିଟର + ପୁନଃପ୍ରଚଳନ ଫ୍ୟାକ୍ଟର୍ >3" },
            ],
          },
          {
            label: "୨.୬ ଜଳ ବ୍ୟବହାର ତୀବ୍ରତାର ସ୍ଥିତି",
            options: [
              { value: 0, label: "ସର୍ବୋତ୍ତମ ଅଭ୍ୟାସ ବେଞ୍ଚମାର୍କଠାରୁ >60% ଅଧିକ" },
              { value: 1, label: "ସର୍ବୋତ୍ତମ ଅଭ୍ୟାସ ବେଞ୍ଚମାର୍କଠାରୁ 51–60% ଅଧିକ" },
              { value: 2, label: "ସର୍ବୋତ୍ତମ ଅଭ୍ୟାସ ବେଞ୍ଚମାର୍କଠାରୁ 11–40% ଅଧିକ" },
              { value: 3, label: "ସର୍ବୋତ୍ତମ ଅଭ୍ୟାସ ବେଞ୍ଚମାର୍କର 10% ମଧ୍ୟରେ" },
            ],
          },
        ],
      },
      {
        title: "୩) ଭୂତଳ ଜଳ ସ୍ଥିରତା",
        questions: [
          {
            label: "୩.୧ ଭୂତଳ ଜଳ ନିର୍ଭରଶୀଳତା (ମୋଟ ବାର୍ଷିକ ଜଳର %)",
            options: [
              { value: 0, label: ">50%" },
              { value: 1, label: "20–50%" },
              { value: 2, label: "5–20%" },
              { value: 3, label: "<5%" },
            ],
          },
          {
            label: "୩.୨ ଭୂତଳ ଜଳ ଉତ୍ତୋଳନର ସ୍ଥିତି",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ପମ୍ପ୍ ହୋଇଥିବା ଘଣ୍ଟାର ମାନୁଆଲ୍ ମନିଟରିଂ" },
              { value: 2, label: "ମାନୁଆଲ୍ ମିଟରିଂ" },
              { value: 3, label: "ସ୍ମାର୍ଟ ମିଟରିଂ" },
            ],
          },
          {
            label: "୩.୩ ଭୂତଳ ଜଳ ପୁନର୍ଭରଣ (ଉତ୍ତୋଳନର %)",
            options: [
              { value: 0, label: "<20%" },
              { value: 1, label: "20–40%" },
              { value: 2, label: "40–50%" },
              { value: 3, label: ">50%" },
            ],
          },
        ],
      },
      {
        title: "୪) ଜଳ ଚକ୍ରୀୟତା",
        questions: [
          {
            label: "୪.୧ ବର୍ଷାଜଳ ଅମଳର ସ୍ଥିତି",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "<50% ଛାତରୁ ବର୍ଷାଜଳ ଅମଳ" },
              { value: 2, label: ">50% ଛାତରୁ ବର୍ଷାଜଳ ଅମଳ" },
              { value: 3, label: "ଛାତର ପାଣି + ଅଣ-ଛାତ ପାଣି ଅମଳ" },
            ],
          },
          {
            label: "୪.୨ ଗ୍ରେୱାଟର/ମଇଳା ପାଣିର ପୁନଃଚକ୍ରଣ କିମ୍ବା ପୁନଃ ବ୍ୟବହାର",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ସୁବିଧା ସ୍ଥାପନ ପାଇଁ ଫୁଟପ୍ରିଣ୍ଟ କ୍ଷେତ୍ର ଉପଲବ୍ଧ" },
              { value: 2, label: "କାର୍ଯ୍ୟ ଚାଲୁଅଛି (ଡିଜାଇନ୍ ହୋଇଛି, ନିର୍ମାଣ ବାକି)" },
              { value: 3, label: "ପୁନଃଚକ୍ରଣ କାର୍ଯ୍ୟକ୍ଷମ" },
            ],
          },
          {
            label: "୪.୩ ସାମୂହିକ RO ବିଶୋଧିତ ଜଳର ସ୍ଥିତି",
            options: [
              { value: 0, label: "କୌଣସି ପୁନଃ ବ୍ୟବହାର ନାହିଁ - ଅଗ୍ରାହ୍ୟ ଜଳ ନିଷ୍କାସିତ" },
              { value: 1, label: "ଅଣ-ପାନୀୟ ପୁନଃ ବ୍ୟବହାର ପାଇଁ ସମ୍ଭବ" },
              { value: 2, label: "କାର୍ଯ୍ୟକାରୀତା ପାଇଁ ଯୋଜନା ପ୍ରସ୍ତୁତ" },
              { value: 3, label: "ଅଗ୍ରାହ୍ୟ ଜଳ ଅଣ-ପାନୀୟ ବ୍ୟବହାର ପାଇଁ ପୁନଃ ବ୍ୟବହୃତ" },
            ],
          },
        ],
      },
      {
        title: "୫) ସବୁଜ ବନସ୍ପତି",
        questions: [
          {
            label: "୫.୧ ସବୁଜ ଆବରଣ ନୀତି",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ଚିଠା ପ୍ରସ୍ତୁତି ଚାଲୁଅଛି" },
              { value: 2, label: "ଚୂଡାନ୍ତ ହୋଇଛି" },
              { value: 3, label: "ଚୂଡାନ୍ତ ହୋଇଛି ଏବଂ ଅଂଶୀଦାରମାନଙ୍କ ସହ ସେୟାର କରାଯାଇଛି" },
            ],
          },
          {
            label: "୫.୨ ସବୁଜ ଆବରଣ କ୍ଷେତ୍ର",
            options: [
              { value: 0, label: "<10%" },
              { value: 1, label: "10–25%" },
              { value: 2, label: "25–50%" },
              { value: 3, label: ">50%" },
            ],
          },
          {
            label: "୫.୩ ସବୁଜ ଭୂଦୃଶ୍ୟ",
            options: [
              { value: 0, label: "ଅଧିକ ଜଳ ଆବଶ୍ୟକ କରୁଥିବା ଅଣ-ସ୍ଥାନୀୟ + କୌଣସି ସ୍ମାର୍ଟ ଜଳସେଚନ ନାହିଁ" },
              { value: 1, label: "ଅଧିକ ଜଳ ଆବଶ୍ୟକ କରୁଥିବା ଅଣ-ସ୍ଥାନୀୟ + ସ୍ମାର୍ଟ ଜଳସେଚନ" },
              { value: 2, label: "ସ୍ଥାନୀୟ ପ୍ରଜାତି + କୌଣସି ସ୍ମାର୍ଟ ଜଳସେଚନ ନାହିଁ" },
              { value: 3, label: "ସ୍ଥାନୀୟ ପ୍ରଜାତି + ସ୍ମାର୍ଟ ଜଳସେଚନ" },
            ],
          },
          {
            label: "୫.୪ ସବୁଜ ଛାତ ଓ କାନ୍ଥ",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ଯୋଜନା ପ୍ରସ୍ତୁତ" },
              { value: 2, label: "ସବୁଜ ଛାତ କାର୍ଯ୍ୟକ୍ଷମ" },
              { value: 3, label: "ସବୁଜ ଛାତ + କାନ୍ଥ କାର୍ଯ୍ୟକ୍ଷମ" },
            ],
          },
        ],
      },
    ],
  },
};

export default translations;