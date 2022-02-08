(() => {
  const section = document.querySelector('#main');
  const challenges = JSON.parse(JSON.stringify(Challenges));

  challenges.forEach(({ html, css, script }, i) => {
    if (!html) {
      return;
    }

    const wrapper = document.createElement('article');

    const a = document.createElement('a');

    const challengeNumber = i + 1
    a.textContent = `#${challengeNumber}`;
    a.href = `https://100dayscss.com/days/${challengeNumber}`;

    const card = document.createElement('challenge-card');

    card.id = `challenge${i}`;

    card.setAttribute('html', html || '');
    card.setAttribute('css', css || '');

    if (script) {
      const parsedScript = (script || '').replace(/document/, `document.querySelector('#challenge${i}').shadowRoot`);
      card.setAttribute('script', parsedScript);
    }

    wrapper.appendChild(card);
    wrapper.appendChild(a);

    section.appendChild(wrapper);
  });
})();
