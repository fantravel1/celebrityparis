/* ═══════════════════════════════════════════════════════════════
   CelebrityParis.com — Data Module
   Celebrity & Venue Database
   ═══════════════════════════════════════════════════════════════ */

window.CelebrityParisData = (function () {
  'use strict';

  // ── Celebrity Database ──────────────────────────────────────
  var celebrities = [
    {
      id: 'audrey-hepburn',
      name: 'Audrey Hepburn',
      initials: 'AH',
      color: '#8B5E83',
      nationality: 'British-Belgian',
      era: '1930s - 1980s',
      eraRange: '1930s-1980s',
      categories: ['film', 'fashion'],
      featured: true,
      quote: 'Paris is always a good idea.',
      connections: [
        { year: '1957', venue: 'Eiffel Tower', description: 'Filmed iconic scenes for Funny Face with Fred Astaire.', source: 'Paramount Pictures production records' },
        { year: '1957', venue: 'The Louvre', description: 'Descended the Daru staircase beside the Winged Victory in Funny Face.', source: 'Paramount Pictures production records' },
        { year: '1957', venue: 'Tuileries Garden', description: 'Danced through the gardens in the Funny Face ballet sequence.', source: 'Paramount Pictures production records' },
        { year: '1961', venue: 'Ritz Paris', description: 'Stayed at the Ritz Paris during European press tours.', source: 'Hotel guest records' },
        { year: '1962', venue: 'Givenchy Atelier', description: 'Fitted for costumes at Hubert de Givenchy\'s atelier on Avenue George V.', source: 'Givenchy archives' },
        { year: '1964', venue: 'Champs-Elysees', description: 'Attended Paris premiere of My Fair Lady.', source: 'Press archives' },
        { year: '1976', venue: 'Grand Palais', description: 'Attended Givenchy haute couture presentation.', source: 'Fashion press archives' },
        { year: '1988', venue: 'Hotel Plaza Athenee', description: 'Stayed during UNICEF visits to Paris.', source: 'UNICEF records' }
      ]
    },
    {
      id: 'ernest-hemingway',
      name: 'Ernest Hemingway',
      initials: 'EH',
      color: '#4A6741',
      nationality: 'American',
      era: '1920s - 1960s',
      eraRange: '1920s-1960s',
      categories: ['literature'],
      featured: true,
      quote: 'If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life, it stays with you, for Paris is a moveable feast.',
      connections: [
        { year: '1921', venue: 'Latin Quarter', description: 'Moved to Paris with first wife Hadley; lived at 74 Rue du Cardinal Lemoine.', source: 'A Moveable Feast, Hemingway (1964)' },
        { year: '1922', venue: 'Shakespeare and Company', description: 'Became a regular at Sylvia Beach\'s legendary bookshop on Rue de l\'Odeon.', source: 'Shakespeare and Company archives' },
        { year: '1922', venue: 'Cafe de Flore', description: 'Wrote early manuscripts at this Saint-Germain-des-Pres institution.', source: 'A Moveable Feast' },
        { year: '1923', venue: 'Les Deux Magots', description: 'Met F. Scott Fitzgerald and other Lost Generation writers here.', source: 'A Moveable Feast' },
        { year: '1924', venue: 'La Closerie des Lilas', description: 'His favorite writing cafe; completed The Sun Also Rises here.', source: 'A Moveable Feast' },
        { year: '1925', venue: 'Le Dingo Bar', description: 'Had his famous first meeting with F. Scott Fitzgerald.', source: 'A Moveable Feast' },
        { year: '1926', venue: 'Brasserie Lipp', description: 'Frequented this Saint-Germain landmark for beer and choucroute.', source: 'Hemingway biographies' },
        { year: '1928', venue: 'Cafe de la Paix', description: 'Met publishers and journalists at this grand Boulevard cafe.', source: 'Press correspondence' },
        { year: '1944', venue: 'Ritz Paris', description: 'Famously "liberated" the Ritz bar during WWII; the bar is now named Bar Hemingway.', source: 'Ritz Paris historical records' },
        { year: '1950', venue: 'Le Select', description: 'Returned to his old Montparnasse haunts in the postwar years.', source: 'Hemingway correspondence' },
        { year: '1956', venue: 'Ritz Paris', description: 'Retrieved trunks of early manuscripts stored at the hotel since the 1920s.', source: 'A Moveable Feast' },
        { year: '1959', venue: 'Hotel Le Bristol', description: 'Final Paris stay during European tour.', source: 'Hotel records' }
      ]
    },
    {
      id: 'coco-chanel',
      name: 'Coco Chanel',
      initials: 'CC',
      color: '#2C2C2C',
      nationality: 'French',
      era: '1910s - 1970s',
      eraRange: '1910s-1970s',
      categories: ['fashion'],
      featured: true,
      quote: 'Fashion fades, only style remains the same.',
      connections: [
        { year: '1910', venue: 'Rue Cambon', description: 'Opened her first Paris hat shop at 21 Rue Cambon.', source: 'Chanel archives' },
        { year: '1918', venue: '31 Rue Cambon', description: 'Established the maison de couture at this legendary address.', source: 'Chanel archives' },
        { year: '1921', venue: 'Ritz Paris', description: 'Began her 30+ year residence in a private suite at the Ritz.', source: 'Ritz Paris records' },
        { year: '1924', venue: 'Theatre des Champs-Elysees', description: 'Designed costumes for the Ballets Russes production of Le Train Bleu.', source: 'Theater archives' },
        { year: '1926', venue: 'Grand Palais', description: 'Debuted her iconic Little Black Dress collection.', source: 'Fashion press archives' },
        { year: '1929', venue: 'Cafe de Flore', description: 'Regular patron during the interwar years.', source: 'Social chronicles' },
        { year: '1931', venue: 'Maxims', description: 'Dined regularly at this Belle Epoque institution.', source: 'Social archives' },
        { year: '1937', venue: 'Palais de Tokyo', description: 'Showed collections at the newly opened modern art museum.', source: 'Exhibition records' },
        { year: '1954', venue: '31 Rue Cambon', description: 'Staged her legendary comeback collection after 15 years of retirement.', source: 'Fashion press archives' },
        { year: '1957', venue: 'Hotel de Crillon', description: 'Attended diplomatic receptions at this Place de la Concorde palace.', source: 'Social chronicles' },
        { year: '1960', venue: 'Grand Palais', description: 'Continued presenting haute couture collections.', source: 'Chanel archives' },
        { year: '1962', venue: 'Cafe de Flore', description: 'Remained a cultural fixture of Saint-Germain-des-Pres.', source: 'Photographic archives' },
        { year: '1965', venue: 'Ritz Paris', description: 'Continued living at the Ritz, walking daily to her atelier on Rue Cambon.', source: 'Ritz Paris records' },
        { year: '1970', venue: 'Ritz Paris', description: 'Spent her final years in her beloved suite at the Ritz.', source: 'Ritz Paris records' },
        { year: '1971', venue: 'Eglise de la Madeleine', description: 'Her funeral drew fashion luminaries from around the world.', source: 'Press archives' }
      ]
    },
    {
      id: 'pablo-picasso',
      name: 'Pablo Picasso',
      initials: 'PP',
      color: '#3D5A80',
      nationality: 'Spanish',
      era: '1900s - 1970s',
      eraRange: '1900s-1970s',
      categories: ['art'],
      featured: true,
      connections: [
        { year: '1900', venue: 'Montmartre', description: 'First arrived in Paris; lived at the Bateau-Lavoir studio.', source: 'Musee Picasso archives' },
        { year: '1904', venue: 'Bateau-Lavoir', description: 'Established his studio in this legendary Montmartre artists\' residence.', source: 'Musee Picasso archives' },
        { year: '1907', venue: 'Bateau-Lavoir', description: 'Painted Les Demoiselles d\'Avignon, launching Cubism.', source: 'Art history records' },
        { year: '1912', venue: 'Montparnasse', description: 'Moved to Montparnasse; frequented La Rotonde and Le Dome.', source: 'Picasso biographies' },
        { year: '1937', venue: 'Grand Palais', description: 'Exhibited Guernica at the Spanish Pavilion during the International Exposition.', source: 'Exposition records' },
        { year: '1944', venue: 'Cafe de Flore', description: 'Celebrated the Liberation of Paris at this cafe.', source: 'Press archives' },
        { year: '1966', venue: 'Grand Palais', description: 'Major retrospective exhibition honored his career.', source: 'Grand Palais exhibition catalogue' }
      ]
    },
    {
      id: 'josephine-baker',
      name: 'Josephine Baker',
      initials: 'JB',
      color: '#C4853A',
      nationality: 'American-French',
      era: '1920s - 1970s',
      eraRange: '1920s-1970s',
      categories: ['music', 'film'],
      featured: true,
      connections: [
        { year: '1925', venue: 'Theatre des Champs-Elysees', description: 'Debuted in La Revue Negre, becoming an overnight sensation.', source: 'Theater archives' },
        { year: '1926', venue: 'Folies Bergere', description: 'Performed her legendary banana dance.', source: 'Folies Bergere records' },
        { year: '1927', venue: 'Casino de Paris', description: 'Headlined shows that drew Parisian high society.', source: 'Casino de Paris archives' },
        { year: '1930', venue: 'Cafe de Flore', description: 'A regular in Saint-Germain-des-Pres social circles.', source: 'Social chronicles' },
        { year: '1937', venue: 'Hotel de Crillon', description: 'Attended diplomatic receptions after becoming a French citizen.', source: 'Government records' },
        { year: '1961', venue: 'Olympia', description: 'Performed at the legendary music hall on Boulevard des Capucines.', source: 'Olympia archives' },
        { year: '2021', venue: 'Pantheon', description: 'Symbolically interred at the Pantheon, only the sixth woman so honored.', source: 'French government records' }
      ]
    },
    {
      id: 'jim-morrison',
      name: 'Jim Morrison',
      initials: 'JM',
      color: '#5C4033',
      nationality: 'American',
      era: '1960s - 1970s',
      eraRange: '1960s-1970s',
      categories: ['music'],
      featured: true,
      connections: [
        { year: '1971', venue: 'Le Marais', description: 'Lived at 17 Rue Beautreillis in his final months.', source: 'Biographies' },
        { year: '1971', venue: 'Cafe de Flore', description: 'Frequented Saint-Germain cafes during his Paris period.', source: 'Morrison biographies' },
        { year: '1971', venue: 'Shakespeare and Company', description: 'Visited George Whitman\'s legendary Left Bank bookshop.', source: 'Bookshop memoirs' },
        { year: '1971', venue: 'Pere Lachaise Cemetery', description: 'Buried at Pere Lachaise; his grave is among the most visited in the world.', source: 'Cemetery records' }
      ]
    },
    {
      id: 'beyonce',
      name: 'Beyonce',
      initials: 'B',
      color: '#C9A84C',
      nationality: 'American',
      era: '2000s - Present',
      eraRange: '2000s-2020s',
      categories: ['music', 'fashion'],
      featured: true,
      connections: [
        { year: '2011', venue: 'Palais de Tokyo', description: 'Attended Paris Fashion Week events.', source: 'Fashion press' },
        { year: '2014', venue: 'Grand Palais', description: 'Front row at Chanel Ready-to-Wear show.', source: 'Fashion press' },
        { year: '2016', venue: 'Hotel Le Meurice', description: 'Stayed during European tour dates.', source: 'Press reports' },
        { year: '2018', venue: 'The Louvre', description: 'Filmed the "Apeshit" music video with Jay-Z inside the Louvre.', source: 'The Carters, "Everything Is Love" album' },
        { year: '2020', venue: 'Hotel de Crillon', description: 'Private Paris visit; attended couture shows.', source: 'Fashion press' },
        { year: '2024', venue: 'Stade de France', description: 'Performed for sold-out audiences during Renaissance World Tour.', source: 'Tour records' }
      ]
    },
    {
      id: 'oscar-wilde',
      name: 'Oscar Wilde',
      initials: 'OW',
      color: '#6B4C7A',
      nationality: 'Irish',
      era: '1880s - 1900',
      eraRange: '1880s-1900s',
      categories: ['literature'],
      featured: true,
      connections: [
        { year: '1883', venue: 'Hotel Voltaire', description: 'Stayed at this Left Bank hotel during his first extended Paris visit.', source: 'Wilde correspondence' },
        { year: '1891', venue: 'Cafe de la Paix', description: 'Met French literary figures during the writing of Salome.', source: 'Wilde biographies' },
        { year: '1893', venue: 'Theatre de lOeuvre', description: 'Salome premiered in French in Paris after being banned in London.', source: 'Theater records' },
        { year: '1898', venue: 'Hotel dAlsace', description: 'Spent his final years at this Left Bank hotel (now L\'Hotel).', source: 'Hotel records' },
        { year: '1900', venue: 'Pere Lachaise Cemetery', description: 'Buried at Pere Lachaise; his tomb features a Jacob Epstein sculpture.', source: 'Cemetery records' }
      ]
    },
    {
      id: 'princess-diana',
      name: 'Princess Diana',
      initials: 'PD',
      color: '#2E5090',
      nationality: 'British',
      era: '1980s - 1990s',
      eraRange: '1980s-1990s',
      categories: ['royalty-politics', 'fashion'],
      connections: [
        { year: '1988', venue: 'British Embassy Paris', description: 'Attended state dinner during official royal visit.', source: 'Royal archives' },
        { year: '1992', venue: 'Hotel de Crillon', description: 'Stayed during Paris visits with Prince Charles.', source: 'Press archives' },
        { year: '1995', venue: 'Versailles', description: 'Attended UNESCO gala at the Palace of Versailles.', source: 'UNESCO records' },
        { year: '1996', venue: 'Christian Dior HQ', description: 'Attended Dior fashion show on Avenue Montaigne.', source: 'Fashion press' },
        { year: '1997', venue: 'Ritz Paris', description: 'Had her last meal at the hotel\'s L\'Espadon restaurant.', source: 'Public inquiry records' }
      ]
    },
    {
      id: 'salvador-dali',
      name: 'Salvador Dali',
      initials: 'SD',
      color: '#B8860B',
      nationality: 'Spanish',
      era: '1920s - 1980s',
      eraRange: '1920s-1980s',
      categories: ['art'],
      connections: [
        { year: '1929', venue: 'Montparnasse', description: 'Arrived in Paris to join the Surrealist movement.', source: 'Art history records' },
        { year: '1934', venue: 'Galerie Jacques Bonjean', description: 'First major Paris solo exhibition.', source: 'Gallery records' },
        { year: '1938', venue: 'Galerie Beaux-Arts', description: 'Participated in the International Surrealist Exhibition.', source: 'Exhibition catalogue' },
        { year: '1950', venue: 'Le Meurice', description: 'Began his tradition of spending one month each year at Le Meurice.', source: 'Hotel Le Meurice records' },
        { year: '1968', venue: 'Le Meurice', description: 'Continued his annual residency for over 30 years.', source: 'Hotel Le Meurice records' },
        { year: '1979', venue: 'Centre Pompidou', description: 'Major retrospective at the Centre Pompidou.', source: 'Centre Pompidou archives' }
      ]
    },
    {
      id: 'edith-piaf',
      name: 'Edith Piaf',
      initials: 'EP',
      color: '#8B0000',
      nationality: 'French',
      era: '1930s - 1960s',
      eraRange: '1930s-1960s',
      categories: ['music'],
      connections: [
        { year: '1935', venue: 'Pigalle', description: 'Discovered singing on the streets of Pigalle and Menilmontant.', source: 'Piaf biographies' },
        { year: '1937', venue: 'ABC Music Hall', description: 'Early career performances at this legendary venue.', source: 'Music hall archives' },
        { year: '1945', venue: 'Moulin Rouge', description: 'Performed at the iconic Montmartre cabaret.', source: 'Moulin Rouge archives' },
        { year: '1950', venue: 'Olympia', description: 'Her legendary performances at the Olympia became the stuff of legend.', source: 'Olympia archives' },
        { year: '1961', venue: 'Olympia', description: 'Historic comeback concerts saved the venue from demolition.', source: 'Olympia archives' },
        { year: '1963', venue: 'Pere Lachaise Cemetery', description: 'Buried at Pere Lachaise; her funeral drew thousands.', source: 'Cemetery records' }
      ]
    },
    {
      id: 'karl-lagerfeld',
      name: 'Karl Lagerfeld',
      initials: 'KL',
      color: '#1C1C1C',
      nationality: 'German-French',
      era: '1960s - 2010s',
      eraRange: '1960s-2010s',
      categories: ['fashion'],
      connections: [
        { year: '1965', venue: 'Fendi HQ Paris', description: 'Began his legendary tenure designing for Fendi.', source: 'Fendi archives' },
        { year: '1983', venue: '31 Rue Cambon', description: 'Appointed creative director of Chanel.', source: 'Chanel archives' },
        { year: '1990', venue: 'Grand Palais', description: 'Transformed the Grand Palais into spectacular Chanel runways.', source: 'Fashion press' },
        { year: '2005', venue: 'Grand Palais', description: 'Created a full-size Chanel iceberg inside the Grand Palais.', source: 'Fashion press' },
        { year: '2010', venue: 'Cafe de Flore', description: 'Regular patron; known for his daily visits.', source: 'Social chronicles' },
        { year: '2014', venue: 'Grand Palais', description: 'Built a Chanel supermarket inside the Grand Palais for a runway show.', source: 'Fashion press' },
        { year: '2017', venue: 'Grand Palais', description: 'Recreated the Eiffel Tower inside the Grand Palais for Chanel.', source: 'Fashion press' }
      ]
    },
    {
      id: 'jean-paul-sartre',
      name: 'Jean-Paul Sartre',
      initials: 'JS',
      color: '#3C3C3C',
      nationality: 'French',
      era: '1930s - 1980s',
      eraRange: '1930s-1980s',
      categories: ['literature'],
      connections: [
        { year: '1938', venue: 'Cafe de Flore', description: 'Began writing at his "office" table at Cafe de Flore.', source: 'Sartre biographies' },
        { year: '1943', venue: 'Cafe de Flore', description: 'Published Being and Nothingness while working at Cafe de Flore daily.', source: 'Publishing records' },
        { year: '1945', venue: 'Les Deux Magots', description: 'Intellectual gatherings with Simone de Beauvoir and Albert Camus.', source: 'Literary chronicles' },
        { year: '1964', venue: 'Cafe de Flore', description: 'Declined the Nobel Prize for Literature from his regular table.', source: 'Press archives' },
        { year: '1980', venue: 'Montparnasse Cemetery', description: 'Buried at Montparnasse Cemetery; his funeral drew 50,000 mourners.', source: 'Press archives' }
      ]
    },
    {
      id: 'zendaya',
      name: 'Zendaya',
      initials: 'Z',
      color: '#9B2335',
      nationality: 'American',
      era: '2010s - Present',
      eraRange: '2010s-2020s',
      categories: ['film', 'fashion'],
      connections: [
        { year: '2019', venue: 'Grand Palais', description: 'Attended Paris Fashion Week shows for multiple designers.', source: 'Fashion press' },
        { year: '2021', venue: 'Hotel de Crillon', description: 'Stayed during Paris Fashion Week appearances.', source: 'Press reports' },
        { year: '2022', venue: 'Louis Vuitton Foundation', description: 'Front row at Louis Vuitton as a brand ambassador.', source: 'Louis Vuitton press' },
        { year: '2024', venue: 'Palais de Tokyo', description: 'Attended couture shows during Haute Couture Week.', source: 'Fashion press' }
      ]
    },
    {
      id: 'gertrude-stein',
      name: 'Gertrude Stein',
      initials: 'GS',
      color: '#6B705C',
      nationality: 'American',
      era: '1900s - 1940s',
      eraRange: '1900s-1940s',
      categories: ['literature', 'art'],
      connections: [
        { year: '1903', venue: '27 Rue de Fleurus', description: 'Established her legendary salon in the 6th arrondissement.', source: 'The Autobiography of Alice B. Toklas' },
        { year: '1906', venue: '27 Rue de Fleurus', description: 'Hosted Picasso, Matisse, and Hemingway at her famous Saturday salons.', source: 'Stein memoirs' },
        { year: '1913', venue: 'Cafe de Flore', description: 'Regular at this Saint-Germain institution.', source: 'Literary chronicles' },
        { year: '1933', venue: 'Shakespeare and Company', description: 'Literary readings and collaborations with Sylvia Beach.', source: 'Bookshop archives' }
      ]
    },
    {
      id: 'christian-dior',
      name: 'Christian Dior',
      initials: 'CD',
      color: '#808080',
      nationality: 'French',
      era: '1940s - 1950s',
      eraRange: '1940s-1950s',
      categories: ['fashion'],
      connections: [
        { year: '1946', venue: '30 Avenue Montaigne', description: 'Founded the House of Dior at this now-legendary address.', source: 'Dior archives' },
        { year: '1947', venue: '30 Avenue Montaigne', description: 'Launched the revolutionary "New Look" collection.', source: 'Fashion history records' },
        { year: '1949', venue: 'Grand Palais', description: 'Presented collections that redefined postwar fashion.', source: 'Fashion press archives' },
        { year: '1950', venue: 'Hotel Plaza Athenee', description: 'Regular at the hotel across from his atelier.', source: 'Hotel records' },
        { year: '1955', venue: 'Versailles', description: 'Presented collections at the Palace of Versailles.', source: 'Dior archives' }
      ]
    },
    {
      id: 'rihanna',
      name: 'Rihanna',
      initials: 'R',
      color: '#E74C3C',
      nationality: 'Barbadian',
      era: '2000s - Present',
      eraRange: '2000s-2020s',
      categories: ['music', 'fashion'],
      connections: [
        { year: '2014', venue: 'Grand Palais', description: 'Front row at Chanel and Dior during Paris Fashion Week.', source: 'Fashion press' },
        { year: '2017', venue: 'Versailles', description: 'Attended Dior cruise show at the Palace of Versailles.', source: 'Dior press' },
        { year: '2019', venue: 'Elysee Palace', description: 'Met President Macron to discuss education initiatives.', source: 'Government press office' },
        { year: '2022', venue: 'Palais de Tokyo', description: 'Launched Fenty collection at Paris Fashion Week.', source: 'Fashion press' }
      ]
    },
    {
      id: 'timothee-chalamet',
      name: 'Timothee Chalamet',
      initials: 'TC',
      color: '#2C3E50',
      nationality: 'American-French',
      era: '2010s - Present',
      eraRange: '2010s-2020s',
      categories: ['film', 'fashion'],
      connections: [
        { year: '2017', venue: 'Cinematheque Francaise', description: 'Paris premiere of Call Me by Your Name.', source: 'Press archives' },
        { year: '2019', venue: 'Grand Palais', description: 'Front row at Haider Ackermann during Paris Fashion Week.', source: 'Fashion press' },
        { year: '2021', venue: 'Palais de Chaillot', description: 'Attended Dune premiere at the Palais de Chaillot.', source: 'Press archives' },
        { year: '2024', venue: 'UGC Normandie', description: 'Wonka Paris premiere on the Champs-Elysees.', source: 'Press archives' }
      ]
    },
    {
      id: 'yves-saint-laurent',
      name: 'Yves Saint Laurent',
      initials: 'YSL',
      color: '#1C1C1C',
      nationality: 'French-Algerian',
      era: '1950s - 2000s',
      eraRange: '1950s-2000s',
      categories: ['fashion'],
      connections: [
        { year: '1957', venue: '30 Avenue Montaigne', description: 'Appointed head of the House of Dior at age 21.', source: 'Dior archives' },
        { year: '1962', venue: '30bis Rue Spontini', description: 'Founded his own maison on the Right Bank.', source: 'YSL archives' },
        { year: '1966', venue: 'Rive Gauche', description: 'Opened the first ready-to-wear boutique, Rive Gauche, on Rue de Tournon.', source: 'YSL archives' },
        { year: '1983', venue: 'Metropolitan Museum (exhibited in Paris)', description: 'First living designer to have a retrospective at the Met; celebrated in Paris.', source: 'Museum records' },
        { year: '2002', venue: 'Centre Pompidou', description: 'Final haute couture show; televised farewell watched worldwide.', source: 'Press archives' }
      ]
    },
    {
      id: 'napoleon-bonaparte',
      name: 'Napoleon Bonaparte',
      initials: 'NB',
      color: '#2F4F4F',
      nationality: 'French-Corsican',
      era: '1790s - 1820s',
      eraRange: '1790s-1820s',
      categories: ['royalty-politics'],
      connections: [
        { year: '1799', venue: 'Tuileries Palace', description: 'Seized power in the coup of 18 Brumaire.', source: 'Historical records' },
        { year: '1804', venue: 'Notre-Dame Cathedral', description: 'Crowned himself Emperor in a lavish ceremony.', source: 'Historical records' },
        { year: '1806', venue: 'Arc de Triomphe', description: 'Commissioned the Arc de Triomphe after the Battle of Austerlitz.', source: 'Government records' },
        { year: '1812', venue: 'The Louvre', description: 'Expanded the Louvre and renamed it the Musee Napoleon.', source: 'Museum records' },
        { year: '1840', venue: 'Les Invalides', description: 'Remains returned from Saint Helena and interred at Les Invalides.', source: 'Government records' }
      ]
    },
    {
      id: 'brigitte-bardot',
      name: 'Brigitte Bardot',
      initials: 'BB',
      color: '#D4A574',
      nationality: 'French',
      era: '1950s - 1970s',
      eraRange: '1950s-1970s',
      categories: ['film', 'fashion'],
      connections: [
        { year: '1952', venue: 'Studios de Boulogne', description: 'Early film roles at Paris studios.', source: 'Film production records' },
        { year: '1956', venue: 'Champs-Elysees', description: 'And God Created Woman premiere made her an international star.', source: 'Press archives' },
        { year: '1959', venue: 'Cafe de Flore', description: 'Became a Saint-Germain icon.', source: 'Social chronicles' },
        { year: '1965', venue: 'Olympia', description: 'Attended performances at the legendary music hall.', source: 'Olympia archives' }
      ]
    },
    {
      id: 'lupita-nyongo',
      name: "Lupita Nyong'o",
      initials: 'LN',
      color: '#6A0572',
      nationality: 'Kenyan-Mexican',
      era: '2010s - Present',
      eraRange: '2010s-2020s',
      categories: ['film', 'fashion'],
      connections: [
        { year: '2014', venue: 'Grand Palais', description: 'Paris Fashion Week debut as an Oscar-winning actress.', source: 'Fashion press' },
        { year: '2019', venue: 'Musee des Arts Decoratifs', description: 'Attended the Dior exhibition opening.', source: 'Museum press' },
        { year: '2022', venue: 'Palais de Tokyo', description: 'Front row at Paris Haute Couture Week.', source: 'Fashion press' }
      ]
    },
    {
      id: 'charlie-chaplin',
      name: 'Charlie Chaplin',
      initials: 'ChC',
      color: '#3D3D3D',
      nationality: 'British',
      era: '1920s - 1970s',
      eraRange: '1920s-1970s',
      categories: ['film'],
      connections: [
        { year: '1921', venue: 'Ritz Paris', description: 'First Paris visit; mobbed by fans at the hotel.', source: 'Chaplin autobiography' },
        { year: '1931', venue: 'Theatre des Champs-Elysees', description: 'Attended screenings and received standing ovations.', source: 'Theater archives' },
        { year: '1952', venue: 'Ritz Paris', description: 'Stayed at the Ritz after his exile from the United States.', source: 'Hotel records' },
        { year: '1954', venue: 'Cinematheque Francaise', description: 'Honored with retrospective screenings by Henri Langlois.', source: 'Cinematheque records' }
      ]
    },
    {
      id: 'frederic-chopin',
      name: 'Frederic Chopin',
      initials: 'FC',
      color: '#5B5EA6',
      nationality: 'Polish-French',
      era: '1830s - 1849',
      eraRange: '1830s-1840s',
      categories: ['music'],
      connections: [
        { year: '1831', venue: 'Salle Pleyel', description: 'Debuted in Paris at the prestigious concert hall.', source: 'Concert records' },
        { year: '1838', venue: 'Rue Tronchet', description: 'Lived and composed in the 9th arrondissement.', source: 'Chopin correspondence' },
        { year: '1849', venue: 'Place Vendome', description: 'Died at 12 Place Vendome; funeral at the Madeleine.', source: 'Historical records' },
        { year: '1849', venue: 'Pere Lachaise Cemetery', description: 'Buried at Pere Lachaise, one of the most visited graves.', source: 'Cemetery records' }
      ]
    },
    {
      id: 'marcel-proust',
      name: 'Marcel Proust',
      initials: 'MP',
      color: '#7B7B7B',
      nationality: 'French',
      era: '1880s - 1920s',
      eraRange: '1880s-1920s',
      categories: ['literature'],
      connections: [
        { year: '1896', venue: 'Ritz Paris', description: 'Regular diner at the Ritz; drew inspiration from its social milieu.', source: 'Proust biographies' },
        { year: '1907', venue: 'Hotel des Reservoirs Versailles', description: 'Wrote portions of In Search of Lost Time.', source: 'Proust correspondence' },
        { year: '1913', venue: '102 Boulevard Haussmann', description: 'Published Swann\'s Way from his cork-lined bedroom.', source: 'Publishing records' },
        { year: '1922', venue: 'Pere Lachaise Cemetery', description: 'Buried at Pere Lachaise after his death from pneumonia.', source: 'Cemetery records' }
      ]
    },
    {
      id: 'jean-paul-belmondo',
      name: 'Jean-Paul Belmondo',
      initials: 'JPB',
      color: '#4F6D7A',
      nationality: 'French',
      era: '1960s - 2000s',
      eraRange: '1960s-2000s',
      categories: ['film'],
      connections: [
        { year: '1960', venue: 'Champs-Elysees', description: 'Starred in Breathless, filmed on the Champs-Elysees.', source: 'Film production records' },
        { year: '1962', venue: 'Le Grand Rex', description: 'Multiple premiere events at this Art Deco landmark.', source: 'Cinema records' },
        { year: '1982', venue: 'Theatre de Paris', description: 'Performed on the Paris stage.', source: 'Theater archives' },
        { year: '2017', venue: 'Cesar Awards', description: 'Received lifetime honorary Cesar Award.', source: 'Academie des Arts records' }
      ]
    },
    {
      id: 'catherine-deneuve',
      name: 'Catherine Deneuve',
      initials: 'CDn',
      color: '#C08497',
      nationality: 'French',
      era: '1960s - Present',
      eraRange: '1960s-2020s',
      categories: ['film', 'fashion'],
      connections: [
        { year: '1964', venue: 'Champs-Elysees', description: 'Premiere of The Umbrellas of Cherbourg.', source: 'Press archives' },
        { year: '1968', venue: 'Yves Saint Laurent Atelier', description: 'Began her lifelong association with YSL.', source: 'YSL archives' },
        { year: '1985', venue: 'Grand Palais', description: 'Front row at major fashion shows for decades.', source: 'Fashion press' },
        { year: '2019', venue: 'Cesar Awards', description: 'Continued her presence at France\'s premier film awards.', source: 'Academie des Arts records' }
      ]
    },
    {
      id: 'elton-john',
      name: 'Elton John',
      initials: 'EJ',
      color: '#E8B030',
      nationality: 'British',
      era: '1970s - Present',
      eraRange: '1970s-2020s',
      categories: ['music', 'fashion'],
      connections: [
        { year: '1979', venue: 'Olympia', description: 'Performed at the legendary Paris music venue.', source: 'Olympia archives' },
        { year: '1992', venue: 'Versailles', description: 'Performed at a charity gala at the Palace of Versailles.', source: 'Event records' },
        { year: '2001', venue: 'Ritz Paris', description: 'Regular guest at the hotel.', source: 'Press reports' },
        { year: '2014', venue: 'Grand Palais', description: 'Attended Chanel shows during Paris Fashion Week.', source: 'Fashion press' }
      ]
    },
    {
      id: 'gene-kelly',
      name: 'Gene Kelly',
      initials: 'GK',
      color: '#2E8B57',
      nationality: 'American',
      era: '1940s - 1960s',
      eraRange: '1940s-1960s',
      categories: ['film'],
      connections: [
        { year: '1951', venue: 'Montmartre', description: 'Filmed An American in Paris on location in Montmartre and along the Seine.', source: 'MGM production records' },
        { year: '1951', venue: 'Place de la Concorde', description: 'Famous ballet sequence filmed at multiple Paris landmarks.', source: 'MGM production records' },
        { year: '1960', venue: 'Palais de Chaillot', description: 'Attended screenings honoring his Paris films.', source: 'Press archives' }
      ]
    },
    {
      id: 'simone-de-beauvoir',
      name: 'Simone de Beauvoir',
      initials: 'SB',
      color: '#8B6E4E',
      nationality: 'French',
      era: '1930s - 1986',
      eraRange: '1930s-1980s',
      categories: ['literature'],
      connections: [
        { year: '1943', venue: 'Cafe de Flore', description: 'Wrote daily alongside Sartre at Cafe de Flore.', source: 'Beauvoir memoirs' },
        { year: '1949', venue: 'Cafe de Flore', description: 'Published The Second Sex, a foundational feminist text.', source: 'Publishing records' },
        { year: '1954', venue: 'Les Deux Magots', description: 'Won the Prix Goncourt for The Mandarins.', source: 'Press archives' },
        { year: '1986', venue: 'Montparnasse Cemetery', description: 'Buried beside Sartre at Montparnasse Cemetery.', source: 'Cemetery records' }
      ]
    }
  ];

  // ── Venue Database ──────────────────────────────────────────
  var venues = [
    { id: 'ritz-paris', name: 'Ritz Paris', type: 'Hotel', address: '15 Place Vendome, 1st', arrondissement: 1, lat: 48.8683, lng: 2.3290, prestige: 98, description: 'The undisputed palace of Parisian luxury. Home to Coco Chanel for over 30 years, frequented by Hemingway, Proust, and every generation of celebrity royalty since 1898.', celebrityVisitors: ['Coco Chanel', 'Ernest Hemingway', 'Princess Diana', 'Charlie Chaplin', 'Audrey Hepburn', 'Marcel Proust', 'Elton John'] },
    { id: 'cafe-de-flore', name: 'Cafe de Flore', type: 'Cafe', address: '172 Boulevard Saint-Germain, 6th', arrondissement: 6, lat: 48.8540, lng: 2.3325, prestige: 92, description: 'The intellectual throne of Saint-Germain-des-Pres. Sartre, de Beauvoir, Picasso, and Karl Lagerfeld all claimed their regular tables.', celebrityVisitors: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Pablo Picasso', 'Ernest Hemingway', 'Karl Lagerfeld', 'Coco Chanel'] },
    { id: 'grand-palais', name: 'Grand Palais', type: 'Monument', address: '3 Avenue du General Eisenhower, 8th', arrondissement: 8, lat: 48.8662, lng: 2.3125, prestige: 96, description: 'Chanel\'s iconic runway cathedral and the stage for Paris\'s grandest exhibitions.', celebrityVisitors: ['Karl Lagerfeld', 'Audrey Hepburn', 'Beyonce', 'Zendaya', 'Rihanna', 'Coco Chanel'] },
    { id: 'the-louvre', name: 'The Louvre', type: 'Museum', address: 'Rue de Rivoli, 1st', arrondissement: 1, lat: 48.8606, lng: 2.3376, prestige: 97, description: 'The world\'s most visited museum. From Napoleon\'s triumphs to Beyonce\'s "Apeshit" video.', celebrityVisitors: ['Beyonce', 'Audrey Hepburn', 'Napoleon Bonaparte'] },
    { id: 'le-meurice', name: 'Le Meurice', type: 'Hotel', address: '228 Rue de Rivoli, 1st', arrondissement: 1, lat: 48.8650, lng: 2.3280, prestige: 93, description: 'Salvador Dali spent a month here every year for three decades. Palatial hotel blending heritage with celebrity allure.', celebrityVisitors: ['Salvador Dali', 'Beyonce'] },
    { id: 'les-deux-magots', name: 'Les Deux Magots', type: 'Cafe', address: '6 Place Saint-Germain-des-Pres, 6th', arrondissement: 6, lat: 48.8541, lng: 2.3334, prestige: 88, description: 'Legendary literary cafe where Hemingway met Fitzgerald and existentialism was debated.', celebrityVisitors: ['Ernest Hemingway', 'Jean-Paul Sartre', 'Simone de Beauvoir'] },
    { id: 'moulin-rouge', name: 'Moulin Rouge', type: 'Theater', address: '82 Boulevard de Clichy, 18th', arrondissement: 18, lat: 48.8841, lng: 2.3322, prestige: 90, description: 'The world\'s most famous cabaret, immortalized in art, film, and popular culture since 1889.', celebrityVisitors: ['Edith Piaf'] },
    { id: 'pere-lachaise', name: 'Pere Lachaise Cemetery', type: 'Cemetery', address: '16 Rue du Repos, 20th', arrondissement: 20, lat: 48.8614, lng: 2.3936, prestige: 88, description: 'The most visited cemetery in the world. Final resting place of Jim Morrison, Oscar Wilde, Edith Piaf, and Frederic Chopin.', celebrityVisitors: ['Jim Morrison', 'Oscar Wilde', 'Edith Piaf', 'Frederic Chopin', 'Marcel Proust'] },
    { id: 'shakespeare-and-company', name: 'Shakespeare and Company', type: 'Cafe', address: '37 Rue de la Bucherie, 5th', arrondissement: 5, lat: 48.8526, lng: 2.3471, prestige: 85, description: 'The legendary Left Bank bookshop, gathering place for the Lost Generation and literary pilgrims ever since.', celebrityVisitors: ['Ernest Hemingway', 'Gertrude Stein', 'Jim Morrison'] },
    { id: 'hotel-plaza-athenee', name: 'Hotel Plaza Athenee', type: 'Hotel', address: '25 Avenue Montaigne, 8th', arrondissement: 8, lat: 48.8662, lng: 2.3039, prestige: 94, description: 'Avenue Montaigne palace hotel, neighbor to Dior and the couture houses.', celebrityVisitors: ['Audrey Hepburn', 'Christian Dior'] },
    { id: 'palais-de-tokyo', name: 'Palais de Tokyo', type: 'Museum', address: '13 Avenue du President Wilson, 16th', arrondissement: 16, lat: 48.8640, lng: 2.2973, prestige: 82, description: 'Contemporary art center and fashion show venue. Regular host for Paris Fashion Week events.', celebrityVisitors: ['Beyonce', 'Zendaya', 'Rihanna', 'Coco Chanel'] },
    { id: 'olympia', name: 'Olympia', type: 'Theater', address: '28 Boulevard des Capucines, 9th', arrondissement: 9, lat: 48.8707, lng: 2.3299, prestige: 87, description: 'Legendary music hall where Edith Piaf, Josephine Baker, and generations of performers have played.', celebrityVisitors: ['Edith Piaf', 'Josephine Baker', 'Elton John'] },
    { id: 'hotel-de-crillon', name: 'Hotel de Crillon', type: 'Hotel', address: '10 Place de la Concorde, 8th', arrondissement: 8, lat: 48.8676, lng: 2.3218, prestige: 95, description: 'Place de la Concorde palace hotel. A diplomatic and celebrity landmark for over two centuries.', celebrityVisitors: ['Princess Diana', 'Beyonce', 'Zendaya', 'Josephine Baker', 'Coco Chanel'] },
    { id: 'centre-pompidou', name: 'Centre Pompidou', type: 'Museum', address: 'Place Georges-Pompidou, 4th', arrondissement: 4, lat: 48.8607, lng: 2.3522, prestige: 89, description: 'The radical modernist museum of contemporary art, hosting major exhibitions and celebrity cultural events.', celebrityVisitors: ['Salvador Dali'] },
    { id: 'versailles', name: 'Palace of Versailles', type: 'Monument', address: 'Place dArmes, Versailles', arrondissement: 0, lat: 48.8049, lng: 2.1204, prestige: 97, description: 'The ultimate expression of French royal power and luxury, now a museum and event venue.', celebrityVisitors: ['Princess Diana', 'Rihanna', 'Christian Dior', 'Elton John'] },
    { id: 'les-invalides', name: 'Les Invalides', type: 'Monument', address: '129 Rue de Grenelle, 7th', arrondissement: 7, lat: 48.8567, lng: 2.3125, prestige: 91, description: 'Military complex housing Napoleon\'s tomb, a monument to French power and history.', celebrityVisitors: ['Napoleon Bonaparte'] },
    { id: 'eiffel-tower', name: 'Eiffel Tower', type: 'Monument', address: 'Champ de Mars, 7th', arrondissement: 7, lat: 48.8584, lng: 2.2945, prestige: 99, description: 'The most iconic landmark in the world. Featured in hundreds of films and countless celebrity moments.', celebrityVisitors: ['Audrey Hepburn', 'Gene Kelly'] },
    { id: 'le-grand-rex', name: 'Le Grand Rex', type: 'Theater', address: '1 Boulevard Poissonniere, 2nd', arrondissement: 2, lat: 48.8710, lng: 2.3478, prestige: 85, description: 'Europe\'s largest cinema auditorium, a 1932 Art Deco landmark on the Grands Boulevards.', celebrityVisitors: ['Jean-Paul Belmondo'] },
    { id: 'theatre-des-champs-elysees', name: 'Theatre des Champs-Elysees', type: 'Theater', address: '15 Avenue Montaigne, 8th', arrondissement: 8, lat: 48.8653, lng: 2.3044, prestige: 90, description: 'Art Deco theater where Josephine Baker debuted and Coco Chanel designed for the Ballets Russes.', celebrityVisitors: ['Josephine Baker', 'Coco Chanel', 'Charlie Chaplin'] },
    { id: 'cinematheque-francaise', name: 'Cinematheque Francaise', type: 'Theater', address: '51 Rue de Bercy, 12th', arrondissement: 12, lat: 48.8365, lng: 2.3820, prestige: 84, description: 'The temple of cinephilia in Bercy, hosting retrospectives and arthouse premieres.', celebrityVisitors: ['Charlie Chaplin', 'Timothee Chalamet'] },
    { id: 'folies-bergere', name: 'Folies Bergere', type: 'Theater', address: '32 Rue Richer, 9th', arrondissement: 9, lat: 48.8745, lng: 2.3440, prestige: 86, description: 'Legendary music hall where Josephine Baker performed her legendary banana dance.', celebrityVisitors: ['Josephine Baker'] },
    { id: 'salle-pleyel', name: 'Salle Pleyel', type: 'Theater', address: '252 Rue du Faubourg Saint-Honore, 8th', arrondissement: 8, lat: 48.8766, lng: 2.3003, prestige: 88, description: 'Storied concert hall and host of the Cesar Awards ceremony.', celebrityVisitors: ['Frederic Chopin'] },
    { id: 'arc-de-triomphe', name: 'Arc de Triomphe', type: 'Monument', address: 'Place Charles de Gaulle, 8th', arrondissement: 8, lat: 48.8738, lng: 2.2950, prestige: 95, description: 'Commissioned by Napoleon, the Arc de Triomphe is one of Paris\'s most recognizable monuments.', celebrityVisitors: ['Napoleon Bonaparte'] },
    { id: 'notre-dame', name: 'Notre-Dame Cathedral', type: 'Monument', address: '6 Parvis Notre-Dame, 4th', arrondissement: 4, lat: 48.8530, lng: 2.3499, prestige: 96, description: 'Gothic masterpiece where Napoleon crowned himself Emperor, now undergoing historic restoration.', celebrityVisitors: ['Napoleon Bonaparte'] },
    { id: 'pantheon', name: 'Pantheon', type: 'Monument', address: 'Place du Pantheon, 5th', arrondissement: 5, lat: 48.8462, lng: 2.3461, prestige: 93, description: 'France\'s secular temple honoring its greatest citizens, including Josephine Baker.', celebrityVisitors: ['Josephine Baker'] },
    { id: 'musee-rodin', name: 'Musee Rodin', type: 'Museum', address: '77 Rue de Varenne, 7th', arrondissement: 7, lat: 48.8554, lng: 2.3159, prestige: 86, description: 'Beautiful museum and garden featured in Midnight in Paris and fashion events.', celebrityVisitors: [] },
    { id: 'pont-alexandre-iii', name: 'Pont Alexandre III', type: 'Monument', address: 'Pont Alexandre III, 7th/8th', arrondissement: 7, lat: 48.8637, lng: 2.3136, prestige: 88, description: 'The most ornate bridge in Paris, featured in Midnight in Paris and countless fashion shoots.', celebrityVisitors: [] },
    { id: 'maxims', name: "Maxim's", type: 'Restaurant', address: '3 Rue Royale, 8th', arrondissement: 8, lat: 48.8671, lng: 2.3236, prestige: 87, description: 'Belle Epoque restaurant synonymous with Parisian luxury dining and celebrity patronage.', celebrityVisitors: ['Coco Chanel'] },
    { id: 'la-closerie-des-lilas', name: 'La Closerie des Lilas', type: 'Restaurant', address: '171 Boulevard du Montparnasse, 6th', arrondissement: 6, lat: 48.8434, lng: 2.3372, prestige: 84, description: 'Hemingway\'s favorite writing cafe where he completed The Sun Also Rises.', celebrityVisitors: ['Ernest Hemingway'] },
    { id: 'brasserie-lipp', name: 'Brasserie Lipp', type: 'Restaurant', address: '151 Boulevard Saint-Germain, 6th', arrondissement: 6, lat: 48.8540, lng: 2.3340, prestige: 83, description: 'Iconic Saint-Germain brasserie frequented by literary and political figures.', celebrityVisitors: ['Ernest Hemingway'] }
  ];

  // ── FAQ Data (for homepage) ─────────────────────────────────
  var homeFAQ = [
    { question: 'Which celebrities have lived in Paris?', answer: 'Many iconic celebrities have lived in Paris, including Ernest Hemingway, Josephine Baker, Pablo Picasso, Jim Morrison, Coco Chanel, and more recently, Johnny Depp and Natalie Portman. Paris has been a magnet for artists, writers, musicians, and film stars for over a century.' },
    { question: 'What are the most famous celebrity venues in Paris?', answer: 'Paris\'s most famous celebrity venues include the Ritz Paris, Cafe de Flore, Les Deux Magots, the Moulin Rouge, Le Meurice, the Olympia, Maxim\'s, and the Plaza Athenee. These establishments have hosted everyone from Hemingway and Coco Chanel to modern-day pop stars and film icons.' },
    { question: 'When is Paris Fashion Week?', answer: 'Paris Fashion Week takes place twice a year: the Spring/Summer collections are shown in September-October, and the Fall/Winter collections are presented in February-March. Haute Couture Fashion Week also occurs twice yearly in January and July.' },
    { question: 'What famous movies were filmed in Paris?', answer: 'Hundreds of famous films have been shot in Paris, including Midnight in Paris, Amelie, The Da Vinci Code, Before Sunset, An American in Paris, Breathless, The Bourne Identity, Moulin Rouge!, Ratatouille, and Mission: Impossible - Fallout.' },
    { question: 'Where do celebrities stay in Paris?', answer: 'Celebrities in Paris typically stay at the city\'s palace hotels, including the Ritz Paris, Le Meurice, Four Seasons Hotel George V, Plaza Athenee, Hotel de Crillon, and The Bristol.' },
    { question: 'How has Paris influenced celebrity culture?', answer: 'Paris has shaped celebrity culture through its fashion houses, literary salons, art galleries, film festivals, and nightlife. The city invented haute couture, hosted the Lost Generation, launched the New Wave cinema movement, and continues to set trends that define global pop culture.' }
  ];

  // ── Public API ──────────────────────────────────────────────
  return {
    celebrities: celebrities,
    venues: venues,
    homeFAQ: homeFAQ,

    getCelebrity: function (id) {
      for (var i = 0; i < celebrities.length; i++) {
        if (celebrities[i].id === id) return celebrities[i];
      }
      return null;
    },

    getVenue: function (id) {
      for (var i = 0; i < venues.length; i++) {
        if (venues[i].id === id) return venues[i];
      }
      return null;
    },

    getFeaturedCelebrities: function (count) {
      var featured = [];
      for (var i = 0; i < celebrities.length; i++) {
        if (celebrities[i].featured) featured.push(celebrities[i]);
        if (featured.length >= (count || 8)) break;
      }
      return featured;
    },

    getFeaturedVenues: function (count) {
      var sorted = venues.slice().sort(function (a, b) { return b.prestige - a.prestige; });
      return sorted.slice(0, count || 6);
    },

    searchAll: function (query) {
      if (!query || query.length < 2) return [];
      var q = query.toLowerCase();
      var results = [];
      for (var i = 0; i < celebrities.length; i++) {
        if (celebrities[i].name.toLowerCase().indexOf(q) !== -1) {
          results.push({ type: 'celebrity', item: celebrities[i] });
        }
      }
      for (var j = 0; j < venues.length; j++) {
        if (venues[j].name.toLowerCase().indexOf(q) !== -1) {
          results.push({ type: 'venue', item: venues[j] });
        }
      }
      return results.slice(0, 8);
    }
  };
})();
