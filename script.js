//เพลง
const music = document.getElementById("music");
    music.volume = 0.6; // ปรับระดับเสียง 0.0 - 1.0
    // 1) ลองเล่นทันที
    music.play().catch(() => {
      // 2) ถ้าถูกบล็อก → รอให้ผู้ใช้คลิก/แตะ/กดปุ่มครั้งแรก
      const unlock = () => {
        music.play();
        ['click', 'touchstart', 'keydown'].forEach(e =>
          document.removeEventListener(e, unlock)
        );
      };
      ['click', 'touchstart', 'keydown'].forEach(e =>
        document.addEventListener(e, unlock)
      );
   });

   // วันที่งานแต่ง: 5 ธันวาคม 2569 (ค.ศ. 2026)
  const weddingDate = new Date(2026, 11, 5, 15, 0, 0).getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000*60*60*24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000*60*60)) / (1000*60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000*60)) / 1000);

    if (distance < 0) {
      clearInterval(countdown);
      document.querySelector('.countdown').innerHTML = "<h3>💍 ถึงวันสำคัญแล้ว! 💍</h3>";
    }
  }, 1000);

  function handleSubmit(e) {
    e.preventDefault();
    alert("ขอบคุณสำหรับการยืนยันครับ/ค่ะ 🙏");
    e.target.reset();
  }

  // ไสลด์รูปภาพ
  new Swiper('.mySwiper', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  grabCursor: true,
  watchSlidesProgress: true,
  coverflowEffect: {
    rotate: 22,        // เอียงต่อ 1 ใบ — น้อยหน่อย เพราะมันสะสมทบกันไปเรื่อย ๆ
    stretch: -45,      // ★ ข้อที่ 3: ค่าลบ = ใบซ้อนเกยกัน ยัดได้เยอะขึ้น
    depth: 160,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: { delay: 2500, disableOnInteraction: false },
});