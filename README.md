# سیستم مدیریت کلینیک

یک سیستم مدیریت کامل برای کلینیک‌های درمانی که با React، TypeScript و Vite ساخته شده است.

## ویژگی‌ها

- 🏥 **مدیریت بیماران**: ثبت، ویرایش و مدیریت اطلاعات بیماران
- 👨‍⚕️ **مدیریت پزشکان**: مدیریت پروفایل و برنامه کاری پزشکان
- 📅 **مدیریت نوبت‌ها**: رزرو و مدیریت نوبت‌های پزشکی
- 🩺 **تخصص‌های پزشکی**: مدیریت تخصص‌های مختلف
- 📋 **برنامه‌های کاری**: تنظیم برنامه کاری پزشکان
- 📈 **گزارشات**: گزارش‌های آماری و تحلیلی
- ⚙️ **تنظیمات سیستم**: پیکربندی سیستم
- 📱 **طراحی ریسپانسیو**: سازگار با تمام دستگاه‌ها
- 🎨 **رابط کاربری مدرن**: طراحی زیبا و کاربرپسند

## تکنولوژی‌های استفاده شده

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Styling**: SCSS + CSS Modules
- **HTTP Client**: Axios
- **Forms**: React Hook Form
- **Notifications**: React Toastify
- **Fonts**: Vazir (فونت فارسی)

## نصب و راه‌اندازی

### پیش‌نیازها

- Node.js (نسخه 18 یا بالاتر)
- npm یا yarn

### نصب وابستگی‌ها

```bash
npm install
# یا
yarn install
```

### اجرای پروژه در حالت توسعه

```bash
npm run dev
# یا
yarn dev
```

پروژه در آدرس `http://localhost:5173` اجرا خواهد شد.

### ساخت نسخه تولید

```bash
npm run build
# یا
yarn build
```

### پیش‌نمایش نسخه تولید

```bash
npm run preview
# یا
yarn preview
```

## ساختار پروژه

```
src/
├── assets/
│   ├── fonts/          # فونت‌های Vazir
│   └── styles/         # فایل‌های SCSS
├── components/         # کامپوننت‌های قابل استفاده مجدد
├── pages/             # صفحات اصلی
├── services/          # سرویس‌های API
├── store/             # مدیریت state با Zustand
└── main.tsx           # نقطه شروع برنامه
```

## کامپوننت‌های اصلی

- **Layout**: چیدمان اصلی برنامه
- **Header**: هدر با منوی ناوبری
- **Sidebar**: منوی کناری
- **Footer**: فوتر
- **Dashboard**: صفحه اصلی داشبورد

## صفحات موجود

- `/` - داشبورد
- `/patients` - مدیریت بیماران
- `/doctors` - مدیریت پزشکان
- `/appointments` - مدیریت نوبت‌ها
- `/specialties` - تخصص‌های پزشکی
- `/schedules` - برنامه‌های کاری
- `/reports` - گزارشات
- `/settings` - تنظیمات

## توسعه

### قوانین کدنویسی

- از TypeScript برای type safety استفاده کنید
- کامپوننت‌ها را در پوشه `components` قرار دهید
- صفحات را در پوشه `pages` قرار دهید
- از SCSS برای استایل‌دهی استفاده کنید
- از ESLint برای بررسی کد استفاده کنید

### اجرای linting

```bash
npm run lint
# یا
yarn lint
```
