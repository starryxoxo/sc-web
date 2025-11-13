---
{"dg-publish":true,"permalink":"/home-1/"}
---


<div id="firstVisitModal" class="modern-modal">
  <div class="modern-modal-content">
    <span id="closeModal" class="modern-modal-close">&times;</span>
    <h1>Welcome!</h1>
    <p>Hi <span class="AuthName"></span>! This is SC Web. We hope this website will be useful for everyone who'll be using this, including you. Explore the website and have fun!</p>
  </div>
</div>

| Heads Up!                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SC Web is moving to [this domain](https://sc-web-blls.onrender.com). It's a **huge** move forward for SC Web. The Netlify website will be up until December 5, 2025. Rest assured, your credentials will be the same. |
| We're making this change to make SC Web more efficient and more cost-effective. Thank you for your support!                                                                                                           |


# Welcome to SC Web, <span class="AuthName"></span>!

A refreshing way to learn, personalized only for SC.

  <div id="scheduleMessage">Loading schedule...</div>

<script>
  const schedule = [
    { timeRange: "7:20-8:20", subjects: { Monday: "Homeroom", Tuesday: "Math", Wednesday: "ESP", Thursday: "Math", Friday: "ESP" }},
    { timeRange: "8:20-9:20", subjects: { Monday: "TLE", Tuesday: "Computer", Wednesday: "Math", Thursday: "MAPEH", Friday: "Math" }},
    { timeRange: "9:40-10:40", subjects: { Monday: "Trigo", Tuesday: "TLE", Wednesday: "TLE", Thursday: "TLE", Friday: "MAPEH" }},
    { timeRange: "10:40-11:40", subjects: { Monday: "MAPEH", Tuesday: "AP", Wednesday: "English", Thursday: "ESP", Friday: "English" }},
    { timeRange: "13:00-14:00", subjects: { Monday: "Filipino", Tuesday: "CEP", Wednesday: "Filipino", Thursday: "AP", Friday: "Trigo" }},
    { timeRange: "14:00-15:00", subjects: { Monday: "English", Tuesday: "Filipino", Wednesday: "AP", Thursday: "Filipino", Friday: "Science" }},
    { timeRange: "15:20-16:20", subjects: { Monday: "Science", Tuesday: "MAPEH", Wednesday: "Trigo", Thursday: "Science", Friday: "Computer" }},
    { timeRange: "16:20-17:20", subjects: { Monday: "ESP", Tuesday: "Trigo", Wednesday: "Science", Thursday: "English", Friday: "AP" }}
  ];

  function toMinutes(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  }

  function isNowInRange(rangeStr, now) {
    const [startStr, endStr] = rangeStr.split('-');
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    return nowMinutes >= toMinutes(startStr) && nowMinutes <= toMinutes(endStr);
  }

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  function getNextDayName(dayName) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const index = dayNames.indexOf(dayName);
    return dayNames[(index + 1) % 7];
  }

  function getSubject(entry, day) {
    return entry.subjects[day] || "No class";
  }

  function updateScheduleMessage() {
    const now = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayName = dayNames[now.getDay()];
    const nextDayName = getNextDayName(todayName);
    const currentTimeStr = formatTime(now);
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    const dayEndMinutes = toMinutes("17:20");
    const afterDayEnd = nowMinutes >= dayEndMinutes;

    let titleMessage = "";
    let subjectsToShow = [];

    if (afterDayEnd) {
      // Show next day schedule, starting from first subject plus next 3
      titleMessage = `Today is ${todayName}, at ${currentTimeStr} — No more subjects today! Tomorrow's schedule (${nextDayName}):`;
      for (let i = 0; i < Math.min(4, schedule.length); i++) {
        subjectsToShow.push(getSubject(schedule[i], nextDayName));
      }
    } else {
      // Find current schedule index or next upcoming
      let currentIndex = schedule.findIndex(entry => isNowInRange(entry.timeRange, now));
      if (currentIndex === -1) {
        currentIndex = schedule.findIndex(entry => toMinutes(entry.timeRange.split('-')[0]) > nowMinutes);
      }

      if (currentIndex === -1) {
        // No more classes today
        titleMessage = `Today is ${todayName}, at ${currentTimeStr} — No subjects remaining, yay!`;
        subjectsToShow = [];
      } else {
        // Show current + next 3 subjects (max 4 total)
        titleMessage = `Today is ${todayName}, at ${currentTimeStr} — Current and upcoming subjects:`;
        for (let i = currentIndex; i < Math.min(currentIndex + 4, schedule.length); i++) {
          subjectsToShow.push(getSubject(schedule[i], todayName));
        }
      }
    }

    // Join subjects with space
    const subjectsRow = subjectsToShow.length > 0 ? subjectsToShow.join(' ') : "(No subjects remaining, yay!)";

    const tableHTML = `
      <table>
        <tr><td>${titleMessage}</td></tr>
        <tr><td>${subjectsRow}</td></tr>
      </table>
    `;

    document.getElementById('scheduleMessage').innerHTML = tableHTML;
  }

  setInterval(updateScheduleMessage, 30000);
  updateScheduleMessage();
</script>


[[Misc/Bulletin Board\|Bulletin Board]] • [[Misc/Contributions Center\|Contributions Center]] • [[Maintenance\|Maintenance]]

>[!attention]- This website is currently lacking in terms of written topics for viewing.
>Contributions are highly welcomed. Kindly send the topic you covered and have finished writing to the class president.

<div class="position">
        <h2 class="title-context">Start learning. <span>Choose a subject.</span></h2>
        <div class="container">
            <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">logic and knowledge</p>
                    <a href="/science" style="display: none;">Science</a>
                    <h2 style="margin-bottom: -12px;">Science</h2>
                    <p>Knowledge and facts.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
            </article>
            <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">logic and knowledge</p>
                    <a href="/math" style="display: none;">Mathematics</a>
                    <h2 style="margin-bottom: -12px;">Mathematics</h2>
                    <p>Critical-thinking, numbers, universe.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
            </article>
            <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">logic and knowledge</p>
                    <a href="/stats" style="display: none;">Statistics</a>
                    <h2 style="margin-bottom: -12px;">Statistics</h2>
                    <p>Probability, logic, numbers, analysis.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
            </article>
            </div>
    </div>
<br>

  <div class="container">
    <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">mapeh</p>
                    <a href="/music" style="display: none;">Music</a>
                    <h2 style="margin-bottom: -12px;">Music</h2>
                    <p>The music around us.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
                <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">mapeh</p>
                    <a href="/arts" style="display: none;">Arts</a>
                    <h2 style="margin-bottom: -12px;">Arts</h2>
                    <p>Human, culture, skill, creative</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
                <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">mapeh</p>
                    <a href="/pe" style="display: none;">pe</a>
                    <h2 style="margin-bottom: -12px;">Physical Education</h2>
                    <p>Fitness and human body.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
                <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">mapeh</p>
                    <a href="/health" style="display: none;">Health</a>
                    <h2 style="margin-bottom: -12px;">Health</h2>
                    <p>Safety and human body.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
</div>
<br>
<div class="container">
  <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">social</p>
                    <a href="/ap" style="display: none;">ap</a>
                    <h2 style="margin-bottom: -12px;">Economics</h2>
                    <p>Solving the problem of scarcity</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
                <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">social</p>
                    <a href="/esp" style="display: none;">esp</a>
                    <h2 style="margin-bottom: -12px;">ESP</h2>
                    <p>Ang pagiging makatao.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
  <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">language</p>
                    <a href="/filipino" style="display: none;">Language</a>
                    <h2 style="margin-bottom: -12px;">Filipino</h2>
                    <p>Wika ng Pilipino.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
                <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">language</p>
                    <a href="/english" style="display: none;">english</a>
                    <h2 style="margin-bottom: -12px;">English</h2>
                    <p>Everyday language for easy communication.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
</div>
<br>
<div class="container">
  <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">logic and knowledge</p>
                    <a href="/tle" style="display: none;">TLE</a>
                    <h2 style="margin-bottom: -12px;">TLE</h2>
                    <p>Various everyday life skills.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
                <article class="card">
                <section class="body white-text">
                    <p class="title" style="font-variant: small-caps;">logic and knowledge</p>
                    <a href="/comp" style="display: none;">com</a>
                    <h2 style="margin-bottom: -12px;">Computer</h2>
                    <p>Technology and computers.</p>
                    <b style="right: 30px; position: absolute; bottom: 15px; font-size: 3.5rem;">&#8594;</b>
                </section>
                </article>
</div>

[SC Web Status](https://scstat.cronitorstatus.com) • v 1.0.14
[[Version History\|Version History]]