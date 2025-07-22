<script>
  const today = new Date();
  const day = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
  });

  const month = today.toLocaleDateString("en-US", { month: "long" });
  
</script>

<header>
  <div class="header__nav">
    <div class="header__logo">
      <h2>Tudoo</h2>
    </div>
    <div class="header__date">
      <h2>{day}</h2>
      <span>{month}</span>
    </div>
  </div>
</header>
