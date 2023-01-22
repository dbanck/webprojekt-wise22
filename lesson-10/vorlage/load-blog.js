// in der echten Welt bspw. aus einem CMS geladen
const blog = [
  {
    headline: "Winterliche Drehorte in Alberta",
    description:
      "Der Schnee peitscht mir ohne Pause ins Gesicht, immer fester kralle ich mich an den seitlichen Griffen des Schneemobils fest und für einen Moment habe ich das Gefühl mitten in einem Bondfilm gelandet zu...",
    image: {
      url: "https://www.filmtourismus.de/wp-content/uploads/2018/12/alberta-spray-lakes-winter-360x240.jpg",
      alt: "Ich vor einem Gletschersee in Canada",
    },
  },
  {
    headline: "Katalonien für Filmfans",
    description:
      "Dieser Beitrag entstand mit finanzieller Unterstützung des Catalan Tourist Board. Ganz im Nordosten Spaniens, von den Pyrenäen bis zum Mittelmeer, erstreckt sich eine filmreife Landschaft, die,...",
    image: {
      url: "https://www.filmtourismus.de/wp-content/uploads/2020/12/spanien-katalonien-cardona-burg-drehort-360x240.jpg",
      alt: "Alte Festung in Katalonien",
    },
  },
  {
    headline: "Spanien in 10 Filmen & Serien",
    description:
      "Dieser Beitrag entstand mit finanzieller Unterstützung des Spanischen Fremdenverkehrsamtes. Von Indiana Jones bis James Bond. Von Lawrence von Arabien bis Daenerys Targaryen. Durch Spanien...",
    image: {
      url: "https://www.filmtourismus.de/wp-content/uploads/2014/10/spanien-baskenland-kloster-gaztelugatxe-360x240.jpg",
      alt: "Kleines Haus auf felsiger Insel.",
    },
  },
  {
    headline: "Movie Christmas - Drehorte beliebter Weihnachtsfilme",
    description:
      "Wo streifte Kevin allein durch New York? Wo verlor das Aschenbrödel seinen Schuh? Und wo genau liegt eigentlich Michels Lönneberga? Die Schauplätze berühmter Weihnachtsfilme sind längst magische Orte...",
    image: {
      url: "https://www.filmtourismus.de/wp-content/uploads/2013/12/sachsen-schloss-moritzburg-aschenbroedel-360x240.jpg",
      alt: "Verschneites Feld auf dem eine Burg steht",
    },
  },
];

// waits for all static HTML to be loaded
document.addEventListener("DOMContentLoaded", function () {
  blog.forEach((blogArticle) => {
    /**
     *  build new article elements
     */
    console.log("Erzeuge Blog-Eintrag\n", blogArticle);

    // <article></article>
    const article = document.createElement("article");

    // <div class="article-image"></div>
    const left = document.createElement("div");
    left.classList.add("article-image");

    // <div class="article-description"></div>
    const right = document.createElement("div");
    right.classList.add("article-description");

    // <h2>"Winterliche Drehorte in Alberta"</h2>
    const headline = document.createElement("h2");
    headline.textContent = blogArticle.headline;

    // <p>Der Schnee peitscht [...] einem Bondfilm gelandet zu...</p>
    const description = document.createElement("p");
    description.textContent = blogArticle.description;

    // <img src="https://www.film[...]ter-360x240.jpg" alt="Ich vor einem Gletschersee in Canada" />
    const image = document.createElement("img");
    image.src = blogArticle.image.url;
    image.alt = blogArticle.image.alt;

    /**
     * combine and arrange elements
     */
    left.appendChild(image);

    right.appendChild(headline);
    right.appendChild(description);

    article.appendChild(left);
    article.appendChild(right);

    document.getElementById("blog-content").appendChild(article);
  });
});
