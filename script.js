const contactSection = document.querySelector("#contact");

const me = {
  name: "Nameless",
  avatar: "Assets/Nameless.png",
  links: [
    { label: "GitHub", url: "https://github.com/AlwaysNameless" },
    { label: "Discord", url: "https://discord.com/users/758340064328941629" },
    { label: "Email", url: "mailto:PassiveNameless@proton.me" },
    { label: "Reddit", url: "https://www.reddit.com/user/PassiveNamelesss" },
  ],
};

const card = document.createElement("div");
card.className = "contact-card";

card.innerHTML = `
  <img src="${me.avatar}" alt="${me.name}">
  <div class="contact-info">
    <h2>${me.name}</h2>
    <div class="contact-links"></div>
  </div>
`;

const linksDiv = card.querySelector(".contact-links");

me.links.forEach(function (link) {
  const btn = document.createElement("a");
  btn.className = "contact-link";
  btn.href = link.url;
  btn.textContent = link.label;
  linksDiv.appendChild(btn);
});

contactSection.appendChild(card);
