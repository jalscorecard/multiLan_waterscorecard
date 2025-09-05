import React, { useRef, useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import NotoSansDevanagari from "../fonts/NotoSansDevanagari-Regular-normal.js";
import NotoSansOriyaRegular from "../fonts/NotoSansOriyaRegular-normal.js";
import NotoSansTeluguRegular from "../fonts/NotoSansTelugu-Regular-normal.js";
import NotoSerifKannadaRegular from "../fonts/NotoSerifKannada-Regular-normal.js";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import bannerImage from "../assets/banner.png";
import sections from "./sections";

jsPDF.API.events.push([
  "addFonts",
  function () {
    this.addFileToVFS("NotoSansDevanagari-Regular.ttf", NotoSansDevanagari);
    this.addFont(
      "NotoSansDevanagari-Regular.ttf",
      "NotoSansDevanagari",
      "normal"
    );
    this.addFileToVFS("NotoSansOriyaRegular.ttf", NotoSansOriyaRegular);
    this.addFont("NotoSansOriyaRegular.ttf", "NotoSansOriya", "normal");
    this.addFileToVFS("NotoSansTelugu-Regular.ttf", NotoSansTeluguRegular);
    this.addFont("NotoSansTelugu-Regular.ttf", "NotoSansTelugu", "normal");
    this.addFileToVFS("NotoSerifKannada-Regular.ttf", NotoSerifKannadaRegular);
    this.addFont("NotoSerifKannada-Regular.ttf", "NotoSerifKannada", "normal");
  },
]);

function toEnglishNumerals(str) {
  if (typeof str !== "string") {
    return str;
  }
  const numeralMap = {
    "०": "0",
    "१": "1",
    "२": "2",
    "३": "3",
    "४": "4",
    "५": "5",
    "६": "6",
    "७": "7",
    "८": "8",
    "९": "9",
    "୦": "0",
    "୧": "1",
    "୨": "2",
    "୩": "3",
    "୪": "4",
    "୫": "5",
    "୬": "6",
    "୭": "7",
    "୮": "8",
    "୯": "9",
    "౦": "0",
    "౧": "1",
    "౨": "2",
    "౩": "3",
    "౪": "4",
    "౫": "5",
    "౬": "6",
    "౭": "7",
    "౮": "8",
    "౯": "9",
    "೦": "0",
    "೧": "1",
    "೨": "2",
    "೩": "3",
    "೪": "4",
    "೫": "5",
    "೬": "6",
    "೭": "7",
    "೮": "8",
    "೯": "9",
  };
  return str.replace(/[०-९୦-୯౦-౯೦-೯]/g, (match) => numeralMap[match]);
}

function mapIndexToScore(index) {
  return (Number(index) + 1) * 25;
}
function getColorForScore(score) {
  if (score <= 49) return "#e74c3c";
  if (score <= 64) return "#f39c12";
  if (score <= 99) return "#27ae60";
  return "#3498db";
}
function calculateSectionScore(section, form) {
  let total = 0,
    count = 0;
  section.questions.forEach((q) => {
    const val = form[q.key];
    if (!(q.notApplicableValue && val == q.notApplicableValue)) {
      const numVal = Number(val);
      if (!isNaN(numVal) && numVal >= 0 && numVal <= 3) {
        total += mapIndexToScore(numVal);
        count++;
      }
    }
  });
  return count ? Math.round(total / count) : 0;
}
function calculateTotalScore(form) {
  let total = 0,
    count = 0;
  sections.forEach((section) => {
    section.questions.forEach((q) => {
      const val = form[q.key];
      if (!(q.notApplicableValue && val == q.notApplicableValue)) {
        const numVal = Number(val);
        if (!isNaN(numVal) && numVal >= 0 && numVal <= 3) {
          total += mapIndexToScore(numVal);
          count++;
        }
      }
    });
  });
  return count ? Math.round(total / count) : 0;
}
function getMaturityLevel(score, lang) {
  if (score < 50) {
    switch (lang) {
      case "hi":
        return "उदीयमान";
      case "mr":
        return "उदीयमान";
      case "te":
        return "ఆకాంక్ష";
      case "kn":
        return "ಆಕಾಂಕ್ಷಿ";
      case "or":
        return "ଆକାଂକ୍ଷୀ";
      default:
        return "Aspirant";
    }
  }
  if (score < 65) {
    switch (lang) {
      case "hi":
        return "प्रदर्शनकारी";
      case "mr":
        return "कामगार";
      case "te":
        return "నిర్వహణకారుడు";
      case "kn":
        return "ప్రದರ್ಶಕ";
      case "or":
        return "ପ୍ରଦର୍ଶନକାରୀ";
      default:
        return "Performer";
    }
  }
  if (score < 100) {
    switch (lang) {
      case "hi":
        return "अग्रणी";
      case "mr":
        return "अग्रगामी";
      case "te":
        return "ముందుండే వ్యక్తి";
      case "kn":
        return "ಮುನ್ನಡೆ";
      case "or":
        return "ଅగ୍ରଣୀ";
      default:
        return "Front Runner";
    }
  }
  switch (lang) {
    case "hi":
      return "सफल साधक";
    case "mr":
      return "यशस्वी";
    case "te":
      return "సాధకుడు";
    case "kn":
      return "ಸಾಧಕ";
    case "or":
      return "ସଫଳତା";
    default:
      return "Achiever";
  }
}
function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}
function getFontForLang(lang) {
  switch (lang) {
    case "hi":
    case "mr":
      return "NotoSansDevanagari";
    case "or":
      return "NotoSansOriya";
    case "te":
      return "NotoSansTelugu";
    case "kn":
      return "NotoSerifKannada";
    default:
      return "helvetica";
  }
}

const Success = ({ form, onRestart }) => {
  const hasSentRef = useRef(false);
  const [emailStatus, setEmailStatus] = useState("idle");
  const currentLang = form.language || "en";
  const totalScore = calculateTotalScore(form);
  const overallColor = getColorForScore(totalScore);
  const maturity = getMaturityLevel(totalScore, currentLang);

  const getImageBase64 = (url) =>
    new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      };
      img.onerror = () => resolve(null);
      img.src = url;
    });

  const addFooter = (doc) => {
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 40;
    const footerY = pageHeight - 40;
    const leftX = margin;
    const centerX = doc.internal.pageSize.getWidth() / 2;
    const rightX = doc.internal.pageSize.getWidth() - margin;

    const footerFont = getFontForLang(currentLang);
    doc.setFont(footerFont, "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    let leftText, centerText, rightText;

    switch (currentLang) {
      case "hi":
        leftText = "घंटे\nसोम-शुक्र / 7:00 – 18:00\nशनिवार / 9:00 – 17:00";
        centerText =
          "क cooperate कार्यालय\nमुख्यालय: अमरावती, महाराष्ट्र 444602\nकॉर्पोरेट ऑफिस: नई दिल्ली, दिल्ली 110049";
        rightText = "संपर्क जानकारी\nईमेल: contact@jalsmruti.org";
        break;
      case "mr":
        leftText = "तास\nसोम-शुक्र / 7:00 – 18:00\nशनिवार / 9:00 – 17:00";
        centerText =
          "कॉर्पोरेट कार्यालये\nमुख्यालय: अमरावती, महाराष्ट्र 444602\nकॉर्पोरेट ऑफिस: नवी दिल्ली, दिल्ली 110049";
        rightText = "संपर्क माहिती\nईमेल: contact@jalsmruti.org";
        break;
      case "te":
        leftText = "గంటలు\nసోమ-శుక్ర / 7:00 – 18:00\nశనివారం / 9:00 – 17:00";
        centerText =
          "కార్పొరేట్ కార్యాలయాలు\nప్రధాన కార్యాలయం: అమరావతి, మహారాష్ట్ర 444602\nకార్పొరేట్ ఆఫీస్: న్యూఢిల్లీ, ఢిల్లీ 110049";
        rightText = "సంప్రదింపు సమాచారం\nఇమెయిల్: contact@jalsmruti.org";
        break;
      case "kn":
        leftText = "ಗಂಟೆಗಳು\nಸೋಮ-ಶುಕ್ರ / 7:00 – 18:00\nಶನಿವಾರ / 9:00 – 17:00";
        centerText =
          "ಕಾರ್ಪೊರೇಟ್ ಕಚೇರಿಗಳು\nಮುಖ್ಯ ಕಚೇರಿ: ಅಮರಾವತಿ, ಮಹಾರಾಷ್ಟ್ರ 444602\nಕಾರ್ಪೊರೇಟ್ ಕಚೇರಿ: ನವದೆಹಲಿ, ದೆಹಲಿ 110049";
        rightText = "ಸಂಪರ್ಕ ಮಾಹಿತಿ\nಇಮೇಲ್: contact@jalsmruti.org";
        break;
      case "or":
        leftText = "ଘଣ୍ଟା\nସୋମ-ଶୁକ୍ର / 7:00 – 18:00\nଶନିବାର / 9:00 – 17:00";
        centerText =
          "କର୍ପୋରେଟ୍ କାର୍ଯ୍ୟାଳୟଗୁଡିକ\nମୁଖ୍ୟ କାର୍ଯ୍ୟାଳୟ: ଅମରାବତୀ, ମହାରାଷ୍ଟ୍ର 444602\nକର୍ପୋରେଟ୍ କାର୍ଯ୍ୟାଳୟ: ନୂଆଦିଲ୍ଲୀ, ଦିଲ୍ଲୀ 110049";
        rightText = "ଯୋଗାଯੋଗ ସୂଚନା\nଇମେଲ୍: contact@jalsmruti.org";
        break;
      default:
        leftText = "Hours\nMon-Fri / 7:00 – 18:00\nSaturday / 9:00 – 17:00";
        centerText =
          "Corporate offices\nHead Office: Amravati, Maharashtra 444602\nCorporate Office: New Delhi, Delhi 110049";
        rightText = "Contact Info\nEmail: contact@jalsmruti.org";
    }

    const lineSpacing = 10;
    leftText.split("\n").forEach((line, i) => {
      doc.text(
        line,
        leftX,
        footerY - (leftText.split("\n").length - 1 - i) * lineSpacing
      );
    });
    centerText.split("\n").forEach((line, i) => {
      doc.text(
        line,
        centerX,
        footerY - (centerText.split("\n").length - 1 - i) * lineSpacing,
        { align: "center" }
      );
    });
    rightText.split("\n").forEach((line, i) => {
      doc.text(
        line,
        rightX,
        footerY - (rightText.split("\n").length - 1 - i) * lineSpacing,
        { align: "right" }
      );
    });
  };

  const generatePdfBlob = async () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    const currentFont = getFontForLang(currentLang);
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;

    let bannerDisplayHeight = 0;
    const bannerBase64 = await getImageBase64(bannerImage);
    if (bannerBase64) {
      const aspectRatio = 214 / 855;
      bannerDisplayHeight = pageWidth * aspectRatio;
      doc.addImage(bannerBase64, "PNG", 0, 0, pageWidth, bannerDisplayHeight);
    }

    let startY = bannerDisplayHeight + 20;
    const slogan =
      "Jalsmruti is empowering communities to restore India's cherished legacy — a land that was once celebrated as 'Sujalaam Sufalaam', abundant in water and lush vegetation.";

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);

    const marginX = 40;
    const maxWidth = pageWidth - marginX * 2;
    const lines = doc.splitTextToSize(slogan, maxWidth);

    lines.forEach((lineText, i) => {
      const y = startY + i * 18;
      const wordsInLine = lineText.split(" ");
      const lineWidth = doc.getTextWidth(lineText);
      let cursorX = (pageWidth - lineWidth) / 2;

      wordsInLine.forEach((word) => {
        if (word === "Jalsmruti") {
          doc.setTextColor(0, 102, 204);
          doc.setFont("helvetica", "bold");
        } else if (
          word.includes("Sujalaam") ||
          word.includes("Sufalaam") ||
          word.includes("'Sujalaam") ||
          word.includes("Sufalaam',")
        ) {
          doc.setTextColor(0, 153, 76);
          doc.setFont("helvetica", "italic");
        } else {
          doc.setTextColor(0, 0, 0);
          doc.setFont("helvetica", "normal");
        }
        const wordWidth = doc.getTextWidth(word + " ");
        doc.text(word, cursorX, y);
        cursorX += wordWidth;
      });
    });

    startY += lines.length * 18 + 20;
    doc.setFont(currentFont, "normal");

    const overallScore = totalScore.toFixed(0);
    const maturityLevel = getMaturityLevel(totalScore, currentLang);
    const { r: rO, g: gO, b: bO } = hexToRgb(overallColor);

    doc.setFillColor(rO, gO, bO);
    doc.rect(40, startY, pageWidth - 80, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont(currentFont, "normal");
    doc.setFontSize(16);

    let overallText;
    switch (currentLang) {
      case "hi":
        overallText = `कुल जल प्रबंधन स्कोर: ${overallScore}`;
        break;
      case "mr":
        overallText = `एकूण जल व्यवस्थापन स्कोर: ${overallScore}`;
        break;
      case "te":
        overallText = `మొత్తం నీటి నిర్వహణ స్కోరు: ${overallScore}`;
        break;
      case "kn":
        overallText = `ಒಟ್ಟು ನೀರಿನ ನಿರ್ವಹಣೆ ಸ್ಕೋರ್: ${overallScore}`;
        break;
      case "or":
        overallText = `ମୋଟ ଜଳ ପରିଚାଳନା ସ୍କୋର: ${overallScore}`;
        break;
      default:
        overallText = `Overall Water Management Score: ${overallScore}`;
    }
    doc.text(overallText, centerX, startY + 18, { align: "center" });

    doc.setFontSize(14);
    let maturityText;
    switch (currentLang) {
      case "hi":
        maturityText = `परिपक्वता स्तर: ${maturityLevel}`;
        break;
      case "mr":
        maturityText = `परिपक्वता स्तर: ${maturityLevel}`;
        break;
      case "te":
        maturityText = `పరిపక్వత స్థాయి: ${maturityLevel}`;
        break;
      case "kn":
        maturityText = `ಪ್ರೌಢತೆಯ ಮಟ್ಟ: ${maturityLevel}`;
        break;
      case "or":
        maturityText = `ପରିପକ୍ୱତା ସ୍ତର: ${maturityLevel}`;
        break;
      default:
        maturityText = `Maturity Level: ${maturityLevel}`;
    }
    doc.text(maturityText, centerX, startY + 34, { align: "center" });

    startY += 60;

    for (let i = 0; i < sections.length; i++) {
      if (i === 3) {
        doc.addPage();
        startY = 40;
      }
      const section = sections[i];
      const sectionScore = calculateSectionScore(section, form);
      const sectionColor = getColorForScore(sectionScore);
      const { r, g, b } = hexToRgb(sectionColor);

      doc.setFillColor(r, g, b);
      doc.rect(40, startY, pageWidth - 80, 25, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont(currentFont, "normal");
      doc.setFontSize(12);
      doc.text(toEnglishNumerals(section.title[currentLang]), 50, startY + 17);

      let averageScoreText;
      switch (currentLang) {
        case "hi":
          averageScoreText = "औसत अंक";
          break;
        case "mr":
          averageScoreText = "सरासरी गुण";
          break;
        case "te":
          averageScoreText = "సగటు స్కోరు";
          break;
        case "kn":
          averageScoreText = "ಸರಾಸರಿ ಸ್ಕೋರ್";
          break;
        case "or":
          averageScoreText = "ହାରାହାରି ସ୍କୋର";
          break;
        default:
          averageScoreText = "Average Score";
      }

      doc.text(
        `${averageScoreText}: ${sectionScore.toFixed(0)}`,
        pageWidth - 50,
        startY + 17,
        { align: "right" }
      );
      startY += 25;

      const tableRows = section.questions.map((q) => {
        const val = form[q.key];
        let notApplicableText;
        switch (currentLang) {
          case "hi":
            notApplicableText = "लागू नहीं";
            break;
          case "mr":
            notApplicableText = "लागू नाही";
            break;
          case "te":
            notApplicableText = "వర్తించదు";
            break;
          case "kn":
            notApplicableText = "ಅನ್ವಯಿಸುವುದಿಲ್ಲ";
            break;
          case "or":
            notApplicableText = "ପ୍ରଯୁଜ୍ୟ ନୁହେଁ";
            break;
          default:
            notApplicableText = "Not Applicable";
        }

        const answerText =
          q.notApplicableValue && val == q.notApplicableValue
            ? notApplicableText
            : q.options && q.options[currentLang]
            ? q.options[currentLang][val] || val || "N/A"
            : val || "N/A";
        return [
          toEnglishNumerals(q.label[currentLang]),
          answerText,
          q.notApplicableValue && val == q.notApplicableValue
            ? "-"
            : String(val),
        ];
      });

      let questionText, answerText, scoreText;
      switch (currentLang) {
        case "hi":
          questionText = "प्रश्न";
          answerText = "उत्तर";
          scoreText = "अंक";
          break;
        case "mr":
          questionText = "प्रश्न";
          answerText = "उत्तर";
          scoreText = "गुण";
          break;
        case "te":
          questionText = "ప్రశ్న";
          answerText = "సమాధానం";
          scoreText = "స్కోరు";
          break;
        case "kn":
          questionText = "ಪ್ರಶ್ನೆ";
          answerText = "ಉತ್ತರ";
          scoreText = "ಸ್ಕೋರ್";
          break;
        case "or":
          questionText = "ପ୍ରଶ୍ନ";
          answerText = "ଉତ୍ତର";
          scoreText = "ସ୍କୋର";
          break;
        default:
          questionText = "Question";
          answerText = "Answer";
          scoreText = "Score";
      }

      autoTable(doc, {
        startY,
        head: [[questionText, answerText, scoreText]],
        body: tableRows,
        margin: { left: 40, right: 40 },
        theme: "grid",
        styles: {
          font: currentFont,
          fontSize: 9,
          textColor: 0,
          cellPadding: 5,
          lineWidth: 0.1,
          lineColor: [50, 50, 50],
        },
        headStyles: {
          font: currentFont,
          fillColor: [255, 255, 255],
          textColor: 0,
          fontStyle: "normal",
        },
      });
      startY = doc.lastAutoTable.finalY + 28;
    }

    let lastTableY = doc.lastAutoTable.finalY;
    if (lastTableY > doc.internal.pageSize.getHeight() - 350) {
      doc.addPage();
      startY = 40;
    } else {
      startY = lastTableY + 50;
    }

    doc.setFont(currentFont, "normal");
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);

    let servicesTitle;
    switch (currentLang) {
      case "hi":
        servicesTitle = "हमारी सेवाएं";
        break;
      case "mr":
        servicesTitle = "आमच्या सेवा";
        break;
      case "te":
        servicesTitle = "మా సేవలు";
        break;
      case "kn":
        servicesTitle = "ನಮ್ಮ ಸೇವೆಗಳು";
        break;
      case "or":
        servicesTitle = "ଆମର ସେବାଗୁଡିକ";
        break;
      default:
        servicesTitle = "OUR SERVICES";
    }
    doc.text(servicesTitle, 40, startY);
    startY += 25;

    doc.setFontSize(13);
    let services;
    switch (currentLang) {
      case "hi":
        services = [
          "• जल निकाय पुनरुद्धार एवं पुनर्स्थापना",
          "• क्षमता निर्माण और व्यवहार परिवर्तन",
          "• शहरी निर्मित रूपों के लिए जल पॉजिटिव प्रोग्राम",
        ];
        break;
      case "mr":
        services = [
          "• जल निकाय पुनरुज्जीवन आणि पुनर्स्थापना",
          "• क्षमता निर्माण आणि वर्तन बदल",
          "• शहरी बांधकामांसाठी जल पॉझिटिव्ह प्रोग्राम",
        ];
        break;
      case "te":
        services = [
          "• జల ఆవరణ పునరుద్ధరణ & పునరుద్ధరణ",
          "• సామర్థ్య నిర్మాణం & ప్రవర్తన మార్పు",
          "• పట్టణ నిర్మిత రూపాల కోసం నీటి పాజిటివ్ ప్రోగ్రామ్",
        ];
        break;
      case "kn":
        services = [
          "• ಜಲಾಶಯ ಪುನರುಜ್ಜೀವನ & ಪುನರ್ಸ್ಥಾಪನೆ",
          "• ಸಾಮರ್ಥ್ಯ ನಿರ್ಮಾಣ & ನಡವಳಿಕೆ ಬದಲಾವಣೆ",
          "• ನಗರ ನಿರ್ಮಿತ ರೂಪಗಳಿಗಾಗಿ ನೀರಿನ ಪಾಜಿಟಿವ್ ಪ್ರೋಗ್ರಾಂ",
        ];
        break;
      case "or":
        services = [
          "• ଜଳାଶୟ ପୁନରୁଦ୍ଧାର ଏବଂ ପୁନରୁଦ୍ଧାର",
          "• ସାମର୍ଥ୍ୟ ନିର୍ମାଣ ଏବଂ ଆଚରଣ ପରିବର୍ତ୍ତନ",
          "• ସହରୀ ନିର୍ମିତ ଫର୍ମଗୁଡିକ ପାଇଁ ଜଳ ପଜିଟିଭ୍ ପ୍ରୋగ్రాମ୍",
        ];
        break;
      default:
        services = [
          "• Water Body Rejuvenation & Restoration",
          "• Capacity Building & Behaviour Change",
          "• Water Positive Program for Urban Built Forms",
        ];
    }
    services.forEach((service) => {
      doc.text(service, 50, startY);
      startY += 25;
    });
    startY += 10;

    const pageHeight = doc.internal.pageSize.getHeight();
    if (startY + 200 > pageHeight - 60) {
      doc.addPage();
      startY = 40;
    }

    doc.setFont(currentFont, "normal");
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);

    let donateTitle;
    switch (currentLang) {
      case "hi":
        donateTitle = "दान करें";
        break;
      case "mr":
        donateTitle = "दान करा";
        break;
      case "te":
        donateTitle = "దానం చేయండి";
        break;
      case "kn":
        donateTitle = "ದಾನ ಮಾಡಿ";
        break;
      case "or":
        donateTitle = "ଦାନ କରନ୍ତୁ";
        break;
      default:
        donateTitle = "Donate";
    }
    doc.text(donateTitle, 40, startY);
    startY += 25;

    let donateDescription;
    switch (currentLang) {
      case "hi":
        donateDescription =
          "जल स्मृति फाउंडेशन भारत में स्थित एक सेक्शन 80G स्वीकृत गैर-लाभकारी संस्था है";
        break;
      case "mr":
        donateDescription =
          "जल स्मृति फाऊंडेशन ही भारतात स्थित एक सेक्शन 80G मान्यताप्राप्त না-नफा संस्था आहे";
        break;
      case "te":
        donateDescription =
          "జల స్మృతి ఫౌండేషన్ భారతదేశంలోని ఒక సెక్షన్ 80G ఆమోదించబడిన నాన్-ప్రాఫిట్ ఎంటిటీ";
        break;
      case "kn":
        donateDescription =
          "ಜಲ ಸ್ಮೃತಿ ಫೌಂಡೇಶನ್ ಭಾರತದಲ್ಲಿರುವ ಒಂದು ವಿಭಾಗ 80G ಅನುಮೋದಿತ ಲಾಭರಹಿತ ಸಂಸ್ಥೆ";
        break;
      case "or":
        donateDescription =
          "ଜଳ ସ୍ମୃତି ଫାଉଣ୍ଡେସନ୍ ହେଉଛି ଭାରତରେ ଅବସ୍ଥିତ ଏକ ବିଭାଗ 80G ଅନୁମୋଦିତ ଅଣ-ଲାଭକାରୀ ସଂସ୍ଥା |";
        break;
      default:
        donateDescription =
          "Jal Smruti Foundation is a Section 80G approved non profit entity based in India";
    }

    doc.setFontSize(14);
    const wrappedLines = doc.splitTextToSize(donateDescription, maxWidth);
    wrappedLines.forEach((line) => {
      doc.text(line, marginX, startY);
      startY += 18;
    });
    startY += 5;

    doc.setFontSize(12);
    let taxDeductionText;
    switch (currentLang) {
      case "hi":
        taxDeductionText = "आपका दान जल स्मृति फाउंडेशन के लिए कर छूट योग्य है";
        break;
      case "mr":
        taxDeductionText =
          "जल स्मृति फाऊंडेशनला केलेले तुमचे दान कर कपातीच्या पात्र आहे";
        break;
      case "te":
        taxDeductionText =
          "జల స్మృతి ఫౌండేషన్ కోసం మీ దానం పన్ను తగ్గింపు అర్హత కలిగి ఉంటుంది";
        break;
      case "kn":
        taxDeductionText =
          "ಜಲ ಸ್ಮೃತಿ ಫೌಂಡೇಶನ್ಗೆ ನಿಮ್ಮ ದಾನವು ತೆರಿಗೆ ಕಡಿತಕ್ಕೆ ಅರ್ಹವಾಗಿದೆ";
        break;
      case "or":
        taxDeductionText =
          "ଜଳ ସ୍ମୃତି ଫାଉଣ୍ଡେସନ୍କୁ ଆପଣଙ୍କର ଦାନ ଟିକସ କପାତଯୋଗ୍ୟ |";
        break;
      default:
        taxDeductionText =
          "Your donation to Jal Smruti Foundation is tax deductible";
    }
    doc.text(taxDeductionText, 40, startY);
    startY += 30;

    let bankHeader;
    switch (currentLang) {
      case "hi":
        bankHeader = "बैंक विवरण";
        break;
      case "mr":
        bankHeader = "बँक तपशील";
        break;
      case "te":
        bankHeader = "బ్యాంక్ వివరాలు";
        break;
      case "kn":
        bankHeader = "ಬ್ಯಾಂಕ್ ವಿವರಗಳು";
        break;
      case "or":
        bankHeader = "ବ୍ୟାଙ୍କ ବିବରଣୀ";
        break;
      default:
        bankHeader = "Bank Details";
    }
    doc.setFont(undefined, "normal");
    doc.text(bankHeader, 40, startY);
    doc.line(40, startY + 2, 40 + doc.getTextWidth(bankHeader), startY + 2);
    startY += 18;

    doc.setFont(currentFont, "normal");
    let bankLines;
    switch (currentLang) {
      case "hi":
        bankLines = [
          "खाता नाम: जल स्मृति फाउंडेशन",
          "बैंक नाम: स्टेट बैंक ऑफ इंडिया",
          "खाता संख्या: 40131834676",
          "खाता प्रकार: चालू",
          "IFSC कोड: SBIN0003866",
        ];
        break;
      case "mr":
        bankLines = [
          "खातेचे नाव: जल स्मृति फाऊंडेशन",
          "बँकेचे नाव: स्टेट बँक ऑफ इंडिया",
          "खाता क्रमांक: 40131834676",
          "खात्याचा प्रकार: चालू",
          "IFSC कोड: SBIN0003866",
        ];
        break;
      case "te":
        bankLines = [
          "ఖాతా పేరు: జల స్మృతి ఫౌండేషన్",
          "బ్యాంక్ పేరు: స్టేట్ బ్యాంక్ ఆఫ్ ఇండియా",
          "ఖాతా సంఖ్య: 40131834676",
          "ఖాతా రకం: కరెంట్",
          "IFSC కోడ్: SBIN0003866",
        ];
        break;
      case "kn":
        bankLines = [
          "ಖಾತೆಯ ಹೆಸರು: ಜಲ ಸ್ಮೃತಿ ಫೌಂಡೇಶನ್",
          "ಬ್ಯಾಂಕ್ ಹೆಸರು: ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ",
          "ಖಾತೆ ಸಂಖ್ಯೆ: 40131834676",
          "ಖಾತೆಯ ಪ್ರಕಾರ: ಕರೆಂಟ್",
          "IFSC ಕೋಡ್: SBIN0003866",
        ];
        break;
      case "or":
        bankLines = [
          "ଖାତା ନାମ: ଜଳ ସ୍ମୃତି ଫାଉଣ୍ଡେସନ୍",
          "ବ୍ୟାଙ୍କ ନାମ: ଷ୍ଟେଟ୍ ବ୍ୟାଙ୍କ ଅଫ୍ ଇଣ୍ଡିଆ",
          "ଖାତା ସଂଖ୍ୟା: 40131834676",
          "ଖାତା ପ୍ରକାର: ଚାଲୁ",
          "IFSC କୋଡ୍: SBIN0003866",
        ];
        break;
      default:
        bankLines = [
          "Account Name: Jal Smruti Foundation",
          "Bank Name: State Bank of India",
          "Account Number: 40131834676",
          "Account Type: Current",
          "IFSC Code: SBIN0003866",
        ];
    }
    bankLines.forEach((line) => {
      doc.text(line, 40, startY);
      startY += 15;
    });
    startY += 15;

    let upiLabel;
    switch (currentLang) {
      default:
        upiLabel = "UPI:";
    }
    doc.setFont(undefined, "normal");
    doc.text(upiLabel, 40, startY);
    doc.line(40, startY + 2, 40 + doc.getTextWidth(upiLabel), startY + 2);

    startY += 18;
    doc.setFont(currentFont, "normal");
    doc.text("jalsmrutifoundation@ybl", 40, startY);

    addFooter(doc);
    return doc.output("blob");
  };

  const sendPdfToBackend = async () => {
    try {
      setEmailStatus("sending");
      const blob = await generatePdfBlob();
      const fileName = `${form.fullName || "Water_Scorecard"}_Report.pdf`;
      const formData = new FormData();
      formData.append(
        "pdf",
        new File([blob], fileName, { type: "application/pdf" })
      );
      formData.append("email", form.email);
      formData.append("cc_email", "contact@jalsmruti.org");

      const res = await fetch("http://localhost:5000/api/send-pdf-email", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setEmailStatus("success");
      } else {
        setEmailStatus("error");
      }
    } catch (err) {
      setEmailStatus("error");
    }
  };

  const handleDownloadPdf = async () => {
    const blob = await generatePdfBlob();
    const fileName = `${
      form.fullName || "Water_Management"
    }_Assessment_Report.pdf`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (!hasSentRef.current && form.email) {
      sendPdfToBackend();
      hasSentRef.current = true;
    }
  }, [form.email]);

  return (
    <Box sx={{ padding: 4, maxWidth: 900, margin: "auto" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Box
          component="img"
          src={bannerImage}
          alt="Banner"
          sx={{ width: "100%", maxHeight: 150, objectFit: "contain" }}
        />
        <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
          {currentLang === "hi"
            ? `धन्यवाद, ${form.fullName || "उपयोगकर्ता"}!`
            : currentLang === "mr"
            ? `धन्यवाद, ${form.fullName || "वापरकर्ता"}!`
            : currentLang === "te"
            ? `ధన్యవాదాలు, ${form.fullName || "వినియోగదారు"}!`
            : currentLang === "kn"
            ? `ಧನ್ಯವಾದಗಳು, ${form.fullName || "ಬಳಕೆದಾರ"}!`
            : currentLang === "or"
            ? `ଧନ୍ୟବାଦ, ${form.fullName || "ବ୍ୟବହାରକାରୀ"}!`
            : `Thank you, ${
                form.fullName || "User"
              } for completing the assessment!`}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: overallColor,
          color: "white",
          textAlign: "center",
          py: 2,
          mb: 4,
          borderRadius: 1,
        }}
      >
        <Typography variant="h5">
          {currentLang === "hi"
            ? `कुल अंक: ${totalScore}`
            : currentLang === "mr"
            ? `एकूण गुण: ${totalScore}`
            : currentLang === "te"
            ? `మొత్తం స్కోరు: ${totalScore}`
            : currentLang === "kn"
            ? `ಒಟ್ಟು ಸ್ಕೋರ್: ${totalScore}`
            : currentLang === "or"
            ? `ମୋଟ ସ୍କୋର: ${totalScore}`
            : `Overall Water Management Score: ${totalScore}`}
        </Typography>
        <Typography variant="h6">
          {currentLang === "hi"
            ? `परिपक्वता स्तर: ${maturity}`
            : currentLang === "mr"
            ? `परिपक्वता स्तर: ${maturity}`
            : currentLang === "te"
            ? `పరిపక్వత స్థాయి: ${maturity}`
            : currentLang === "kn"
            ? `ಪ್ರೌಢತೆಯ ಮಟ್ಟ: ${maturity}`
            : currentLang === "or"
            ? `ପରିపକ୍ୱତା ସ୍ତର: ${maturity}`
            : `Maturity Level: ${maturity}`}
        </Typography>
      </Box>

      {emailStatus === "sending" && (
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: "center", mt: 2 }}
        >
          {" "}
          {"Sending email with your report..."}{" "}
        </Typography>
      )}
      {emailStatus === "success" && (
        <Typography
          variant="body2"
          color="success.main"
          sx={{ textAlign: "center", mt: 2 }}
        >
          {" "}
          {"Report sent successfully to your email!"}{" "}
        </Typography>
      )}
      {emailStatus === "error" && (
        <Typography
          variant="body2"
          color="error"
          sx={{ textAlign: "center", mt: 2 }}
        >
          {" "}
          {"Failed to send email. Please download the report manually."}{" "}
        </Typography>
      )}

      {sections.map((section, sIdx) => {
        const sectionScore = calculateSectionScore(section, form);
        const color = getColorForScore(sectionScore);

        return (
          <Box
            key={`section-${sIdx}`}
            sx={{
              mb: 4,
              border: `2px solid ${color}`,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ backgroundColor: color, color: "white", p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "normal" }}>
                {toEnglishNumerals(section.title[currentLang])} (
                {currentLang === "hi"
                  ? "औसत अंक"
                  : currentLang === "mr"
                  ? "सरासरी गुण"
                  : currentLang === "te"
                  ? "సగటు స్కోరు"
                  : currentLang === "kn"
                  ? "ಸರಾಸರಿ ಸ್ಕೋರ್"
                  : currentLang === "or"
                  ? "ହାରାହାରି ସ୍କୋର"
                  : "Average Score"}
                : {sectionScore})
              </Typography>
            </Box>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      {currentLang === "hi"
                        ? "प्रश्न"
                        : currentLang === "mr"
                        ? "प्रश्न"
                        : currentLang === "te"
                        ? "ప్రశ్న"
                        : currentLang === "kn"
                        ? "ಪ್ರಶ್ನೆ"
                        : currentLang === "or"
                        ? "ପ୍ରଶ୍ନ"
                        : "Question"}
                    </TableCell>
                    <TableCell>
                      {currentLang === "hi"
                        ? "उत्तर"
                        : currentLang === "mr"
                        ? "उत्तर"
                        : currentLang === "te"
                        ? "సమాధానం"
                        : currentLang === "kn"
                        ? "ಉತ್ತರ"
                        : currentLang === "or"
                        ? "ଉତ୍ତର"
                        : "Answer"}
                    </TableCell>
                    <TableCell>
                      {currentLang === "hi"
                        ? "अंक"
                        : currentLang === "mr"
                        ? "गुण"
                        : currentLang === "te"
                        ? "స్కోరు"
                        : currentLang === "kn"
                        ? "ಸ್ಕೋರ್"
                        : currentLang === "or"
                        ? "ସ୍କୋର"
                        : "Score"}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {section.questions.map((q, qIdx) => {
                    const rawVal = form[q.key];
                    let answerText = "N/A";
                    if (rawVal !== undefined && rawVal !== "") {
                      if (
                        q.notApplicableValue &&
                        rawVal == q.notApplicableValue
                      ) {
                        answerText =
                          currentLang === "hi"
                            ? "लागू नहीं"
                            : currentLang === "mr"
                            ? "लागू नाही"
                            : currentLang === "te"
                            ? "వర్తించదు"
                            : currentLang === "kn"
                            ? "ಅನ್ವಯಿಸುವುದಿಲ್ಲ"
                            : currentLang === "or"
                            ? "ପ୍ରଯୁଜ୍ୟ ନୁହେଁ"
                            : "Not Applicable";
                      } else {
                        const numVal = Number(rawVal);
                        if (
                          q.options &&
                          q.options[currentLang] &&
                          !isNaN(numVal)
                        ) {
                          answerText = q.options[currentLang][numVal] || "N/A";
                        } else {
                          answerText = rawVal;
                        }
                      }
                    }

                    return (
                      <TableRow key={`row-${sIdx}-${q.key}-${qIdx}`}>
                        <TableCell>
                          {toEnglishNumerals(q.label[currentLang])}
                        </TableCell>
                        <TableCell>{answerText}</TableCell>
                        <TableCell>
                          {q.notApplicableValue &&
                          rawVal == q.notApplicableValue
                            ? "-"
                            : rawVal !== "" && rawVal !== undefined
                            ? String(rawVal)
                            : "-"}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );
      })}

      <Box
        sx={{
          textAlign: "center",
          marginTop: 4,
          padding: 2,
          borderTop: "2px solid #154360",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: 2 }}
          onClick={handleDownloadPdf}
        >
          {currentLang === "hi"
            ? "PDF रिपोर्ट डाउनलोड करें"
            : currentLang === "mr"
            ? "PDF अहवाल डाउनलोड करा"
            : currentLang === "te"
            ? "PDF రిపోర్ట్ డౌన్‌లోడ్ చేయండి"
            : currentLang === "kn"
            ? "PDF ವರದಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
            : currentLang === "or"
            ? "PDF ରିପୋర్ଟ ଡାଉନଲୋଡ୍ କରନ୍ତୁ"
            : "Download PDF Report"}
        </Button>
        <Button variant="outlined" color="secondary" onClick={onRestart}>
          {currentLang === "hi"
            ? "एक और फॉर्म जमा करें"
            : currentLang === "mr"
            ? "आणखी एक फॉर्म सबमिट करा"
            : currentLang === "te"
            ? "మరో ఫారమ్ సమర్పించండి"
            : currentLang === "kn"
            ? "ಮತ್ತೊಂದು ಫಾರಮ್ ಸಲ್ಲಿಸಿ"
            : currentLang === "or"
            ? "ଆଉ ଏକ ଫର୍ମ ଦାଖଲ କରନ୍ତୁ"
            : "Submit Another Form"}
        </Button>
      </Box>
    </Box>
  );
};

export default Success;
