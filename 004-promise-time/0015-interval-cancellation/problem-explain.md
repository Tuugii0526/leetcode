# Бодлогийн өгүүлбэр

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

Танд fn функц ,args aргумент ,давтах хугацаа t өгөх бөгөөд эндээс та cancelFn функц буцаана .
Тодорхой cancelTimeMs cекундын дараа cancelFn функц дуудагдах бөгөөд тэр хүртэл t хугацааны давтамжтай манай анх өгсөн **fn** функц дуудагдана .

**Энгийнээр илэрхйилбэл**:
Функцийг давтамжтай ажиллуулж эхлэх бөгөөд тодорхой хугацааны дараа энэ ажилгааг зогсоох ажээ .

**Бодолт**:
setInterval функц нь онцгой id буцаадаг бөгөөд дараа нь та үүнийг ашиглан тодорхой хугацааны давтамжтай ажиллаж байгаа функцаа clearInterval ашиглан зогсоож болно .

Бид энд setInterval функцаа дуудахаар id өгөх бөгөөд манай буцааж байгаа функц нь clearInterval хийж байгаа .
