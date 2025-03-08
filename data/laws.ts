// This file contains all the laws data
// To add a new law, simply add a new entry to this object

export const laws: Record<
  string,
  {
    title: { en: string; it: string }
    summary: { en: string; it: string }
    content: { en: string; it: string }
  }
> = {
  "1": {
    title: {
      en: "No tool can be more complicated than the action it performs",
      it: "La complessità dello strumento non può superare la complessità dell'azione",
    },
    summary: {
      en: "When designing and developing a system, balance the effort to implement the tool with the complexity of the action it must execute.",
      it: "Durante la progettazione e lo sviluppo di un sistema, bilancia l'impegno nell'implementare lo strumento con la complessità dell'azione da eseguire.",
    },
    content: {
      en: `
        <p class="mb-4">
          When designing and developing a system, balance the effort to implement the tool with the complexity of the action it must execute.
        </p>
      `,
      it: `
        <p class="mb-4">
          Durante la progettazione e lo sviluppo di un sistema, bilancia l'impegno nell'implementare lo strumento con la complessità dell'azione da eseguire.
        </p>
      `,
    },
  },
  // To add a new law, copy the structure above and add a new entry
  // Example:
  // "2": {
  //   title: { en: "New Law Title", it: "Titolo Nuova Legge" },
  //   summary: { en: "Summary in English", it: "Riassunto in Italiano" },
  //   content: { en: "<p>Content in English</p>", it: "<p>Contenuto in Italiano</p>" }
  // }
}

