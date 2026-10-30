let score = 85; // Tekshirish uchun ball qiymati

if (score < 0 || score > 100) {
    console.log("Noto'g'ri ball kiritildi");[cite = 1]
} else if (score >= 90) {
    console.log("A'lo");[cite = 1]
} else if (score >= 70) {
    console.log("Yaxshi");[cite = 1]
} else if (score >= 60) {
    console.log("Qoniqarli");[cite = 1]
} else {
    console.log("Yiqildingiz");[cite=  1]
}

let login = "admin";[cite = 1]
let password = "12345";[cite = 1]
let isBlocked = false;[cite = 1]

if (isBlocked) {
    console.log("Hisobingiz bloklangan");[cite = 1]
} else if (login === "admin" && password === "12345") {
    console.log("Xush kelibsiz!");[cite = 1]
} else if (login !== "admin") {
    console.log("Login noto'g'ri");[cite = 1]
} else {
    console.log("Parol noto'g'ri");[cite = 1]
}

let total = 650000;[cite = 2]
let isMember = true;[cite = 2]
let discount = 0;

if (total >= 1000000) {
    discount = 20;[cite = 2]
} else if (total >= 500000 && isMember) {
    discount = 15;[cite = 2]
} else if (total >= 500000 && !isMember) {
    discount = 10;[cite = 2]
} else if (total >= 200000) {
    discount = 5;[cite = 2]
} else {
    discount = 0;[cite = 2]
}

let finalAmount = total - (total * discount / 100);
console.log(`Chegirma foizi: ${discount}%, Yakuniy to'lov: ${finalAmount} so'm`);[cite = 2]

let  = 5;[cite = 3]
let  = 7;[cite = 3]
let  = 9;[cite = 3]


{
    console.log("Tomonlar noto'g'ri");[cite = 3]
} 
{
    console.log("Uchburchak mavjud");[cite = 3]
}
{
    console.log("Uchburchak mavjud emas");[cite = 3]
}

let orderPrice = 180000;[cite = 3]
let region = "tashkent";[cite = 3]
let isExpress = true;[cite = 3]
let deliveryFee = 0;

if (region === "tashkent") {
    if (orderPrice >= 200000) {
        deliveryFee = 0;[cite = 3]
    } else {
        deliveryFee = 15000;[cite = 3]
    }
} else {
    deliveryFee = 25000;[cite = 3]
}

if (isExpress) {
    deliveryFee += 20000;[cite = 3]
}

let totalCost = orderPrice + deliveryFee;
console.log(`Buyurtma va yetkazib berishning umumiy narxi: ${totalCost} so'm`);[cite = 3]

let age = 22;[cite = 3]
let experience = 2;[cite = 3]
let englishLevel = "B2";[cite = 3]
let hasCertificate = true;[cite = 3]

if (age < 18) {
    console.log("Yosh talabiga mos emas");[cite = 3]
} else if (experience >= 2 && (englishLevel === "B2" || englishLevel === "C1")) {
    console.log("Suhbatga taklif qilindi");[cite = 3]
} else if (experience >= 1 && hasCertificate) {
    console.log("Qo'shimcha ko'rib chiqiladi");[cite = 3]
} else {
    console.log("Talablarga mos emas");[cite = 3]
}

let balance = 850000;[cite = 4]
let amount = 300000;[cite = 4]
let cardBlocked = false;[cite = 4]

if (cardBlocked) {
    console.log("Karta bloklangan");[cite = 4]
} else if (amount <= 0) {
    console.log("Summa noto'g'ri");[cite = 4]
} else if (amount > 1000000) {
    console.log("Kunlik limitdan oshdi");[cite = 4]
} else if (amount > balance) {
    console.log("Mablag' yetarli emas");[cite = 4]
} else {
    balance -= amount;
    console.log(`Pul yechildi. Qolgan balans: ${balance} so'm`);[cite = 4]
}

let a = 12;[cite = 4]
let b = 12;[cite = 4]
let c = 5;[cite = 4]

// Manfiy son mavjudligini alohida tekshirib o'tamiz
if (a < 0 || b < 0 || c < 0) {
    console.log("Manfiy son mavjud");[cite = 4]
}

if (a === b && b === c) {
    console.log("Barcha sonlar teng");[cite = 4]
} else if (a === b || a === c || b === c) {
    console.log("Ikkita son teng");[cite = 4]
} else {
    console.log("Barcha sonlar har xil");[cite = 4]
}

let averageScore = 88;[cite = 5]
let attendance = 92;[cite = 5]
let hasWarning = false;[cite = 5]

if (attendance < 60 || hasWarning) {
    console.log("Stipendiya berilmaydi");[cite = 5]
} else if (averageScore >= 90 && attendance >= 90 && !hasWarning) {
    console.log("Yuqori stipendiya");[cite = 5]
} else if (averageScore >= 75 && attendance >= 80 && !hasWarning) {
    console.log("Oddiy stipendiya");[cite = 5]
} else {
    console.log("Talablar bajarilmadi");[cite = 5]
}

let isRegistered = true;[cite = 5]
let hasPaid = true;[cite = 5]
let isBanned = false;[cite = 5]
let examScore = 0;[cite = 5]

if (!isRegistered) {
    console.log("Avval ro'yxatdan o'ting");[cite = 5]
} else if (!hasPaid) {
    console.log("To'lovni amalga oshiring");[cite = 5]
} else if (isBanned) {
    console.log("Imtihonga kirish taqiqlangan");[cite = 5]
} else if (examScore < 0 || examScore > 100) {
    console.log("Noto'g'ri natija");[cite = 5]
} else if (examScore === 0) {
    console.log("Imtihonni boshlashingiz mumkin");[cite = 5]
} else if (examScore < 60) {
    console.log("Imtihondan o'tmadingiz");[cite = 5]
} else {
    console.log("Imtihondan muvaffaqiyatli o'tdingiz");[cite = 5]
}