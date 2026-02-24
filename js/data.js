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
    },
    {
      id: 'claude-monet',
      name: 'Claude Monet',
      initials: 'CM',
      color: '#5B8FA8',
      nationality: 'French',
      era: '1860s - 1920s',
      eraRange: '1860s-1920s',
      categories: ['art'],
      connections: [
        { year: '1862', venue: 'Louvre', description: 'Studied the Old Masters and painted copies at the Louvre as a young art student.', source: 'Monet biographies' },
        { year: '1874', venue: 'Boulevard des Capucines', description: 'Exhibited Impression, Sunrise at the first Impressionist exhibition, giving the movement its name.', source: 'Exhibition catalogue 1874' },
        { year: '1877', venue: 'Gare Saint-Lazare', description: 'Painted his famous series of the Gare Saint-Lazare station interiors.', source: 'Art history records' },
        { year: '1895', venue: 'Galerie Durand-Ruel', description: 'Exhibited the Rouen Cathedral series to wide acclaim.', source: 'Gallery archives' },
        { year: '1922', venue: 'Musee de lOrangerie', description: 'Donated his monumental Water Lilies murals to the French state.', source: 'Museum records' }
      ]
    },
    {
      id: 'henri-matisse',
      name: 'Henri Matisse',
      initials: 'HM',
      color: '#E2725B',
      nationality: 'French',
      era: '1890s - 1950s',
      eraRange: '1890s-1950s',
      categories: ['art'],
      connections: [
        { year: '1895', venue: 'Ecole des Beaux-Arts', description: 'Studied under Gustave Moreau at the prestigious Paris art school.', source: 'School records' },
        { year: '1905', venue: 'Grand Palais', description: 'Exhibited at the Salon dAutomne, earning the name "Fauve" for his wild use of color.', source: 'Salon dAutomne catalogue' },
        { year: '1906', venue: '27 Rue de Fleurus', description: 'Met Picasso at Gertrude Steins legendary salon.', source: 'Stein memoirs' },
        { year: '1910', venue: 'Grand Palais', description: 'Continued showing works at major Paris salons.', source: 'Exhibition records' },
        { year: '1950', venue: 'Musee National dArt Moderne', description: 'Major retrospective in Paris celebrating his career.', source: 'Museum records' }
      ]
    },
    {
      id: 'marlene-dietrich',
      name: 'Marlene Dietrich',
      initials: 'MD',
      color: '#8B6969',
      nationality: 'German-American',
      era: '1930s - 1970s',
      eraRange: '1930s-1970s',
      categories: ['film', 'music'],
      connections: [
        { year: '1933', venue: 'Ritz Paris', description: 'First Paris stay; fell in love with the city and its fashion.', source: 'Dietrich memoirs' },
        { year: '1937', venue: 'Hotel Lancaster', description: 'Resided at this Right Bank hotel during film work in Europe.', source: 'Hotel records' },
        { year: '1950', venue: 'Hotel Plaza Athenee', description: 'Stayed during extended Paris visits in the postwar years.', source: 'Hotel records' },
        { year: '1959', venue: 'Olympia', description: 'Performed a legendary one-woman show at the Olympia.', source: 'Olympia archives' },
        { year: '1975', venue: 'Avenue Montaigne', description: 'Moved to her final Paris apartment at 12 Avenue Montaigne.', source: 'Biographies' },
        { year: '1992', venue: 'Eglise de la Madeleine', description: 'Her funeral service was held at La Madeleine church.', source: 'Press archives' }
      ]
    },
    {
      id: 'duke-ellington',
      name: 'Duke Ellington',
      initials: 'DE',
      color: '#4B3621',
      nationality: 'American',
      era: '1930s - 1970s',
      eraRange: '1930s-1970s',
      categories: ['music'],
      connections: [
        { year: '1933', venue: 'Salle Pleyel', description: 'First Paris concert at the prestigious concert hall; rapturously received.', source: 'Concert archives' },
        { year: '1939', venue: 'Moulin Rouge', description: 'Performed at the Moulin Rouge during a European tour.', source: 'Venue archives' },
        { year: '1950', venue: 'Olympia', description: 'Played multiple sold-out dates at the Olympia.', source: 'Olympia archives' },
        { year: '1958', venue: 'Cafe de Flore', description: 'Visited Saint-Germain jazz haunts between concert engagements.', source: 'Music press' },
        { year: '1966', venue: 'Theatre des Champs-Elysees', description: 'Performed the Sacred Concert series for Parisian audiences.', source: 'Theater archives' }
      ]
    },
    {
      id: 'miles-davis',
      name: 'Miles Davis',
      initials: 'MiD',
      color: '#2F4F4F',
      nationality: 'American',
      era: '1940s - 1990s',
      eraRange: '1940s-1990s',
      categories: ['music'],
      connections: [
        { year: '1949', venue: 'Salle Pleyel', description: 'Performed at the Paris Jazz Festival, launching his love affair with the city.', source: 'Festival records' },
        { year: '1949', venue: 'Club Saint-Germain', description: 'Played at Left Bank jazz clubs and began a relationship with Juliette Greco.', source: 'Davis autobiography' },
        { year: '1957', venue: 'Olympia', description: 'Recorded the Ascenseur pour lechafaud soundtrack for Louis Malles film.', source: 'Fontana Records' },
        { year: '1964', venue: 'Salle Pleyel', description: 'Performed with his classic quintet to adoring Parisian audiences.', source: 'Concert archives' },
        { year: '1991', venue: 'La Villette', description: 'One of his final European performances at the Grande Halle.', source: 'Concert records' }
      ]
    },
    {
      id: 'juliette-greco',
      name: 'Juliette Greco',
      initials: 'JG',
      color: '#2C2C2C',
      nationality: 'French',
      era: '1940s - 2010s',
      eraRange: '1940s-2010s',
      categories: ['music'],
      connections: [
        { year: '1946', venue: 'Le Tabou', description: 'Became the muse of existentialism at this Saint-Germain cellar club.', source: 'Music press archives' },
        { year: '1949', venue: 'Club Saint-Germain', description: 'Romance with Miles Davis while performing in Left Bank clubs.', source: 'Greco memoirs' },
        { year: '1951', venue: 'Cafe de Flore', description: 'A defining presence at Cafe de Flore alongside Sartre and Camus.', source: 'Social chronicles' },
        { year: '1954', venue: 'Olympia', description: 'Headlined at the Olympia, cementing her status as a chanson icon.', source: 'Olympia archives' },
        { year: '1966', venue: 'Bobino', description: 'Performed legendary concerts at the Montparnasse music hall.', source: 'Venue archives' }
      ]
    },
    {
      id: 'grace-kelly',
      name: 'Grace Kelly',
      initials: 'GrK',
      color: '#C4B49A',
      nationality: 'American-Monegasque',
      era: '1950s - 1980s',
      eraRange: '1950s-1980s',
      categories: ['film', 'royalty-politics', 'fashion'],
      connections: [
        { year: '1955', venue: 'Carlton Cannes (visited Paris)', description: 'Met Prince Rainier during a Paris photo shoot for Look magazine before the Cannes Film Festival.', source: 'Press archives' },
        { year: '1956', venue: 'Hotel Plaza Athenee', description: 'Stayed during her Paris visits as a Hollywood star.', source: 'Hotel records' },
        { year: '1960', venue: 'Grand Palais', description: 'Attended fashion shows and cultural events as Princess of Monaco.', source: 'Press archives' },
        { year: '1970', venue: 'Versailles', description: 'Attended diplomatic galas at the Palace of Versailles.', source: 'Government records' },
        { year: '1976', venue: 'Christian Dior HQ', description: 'Front row at Dior couture shows on Avenue Montaigne.', source: 'Fashion press' }
      ]
    },
    {
      id: 'james-baldwin',
      name: 'James Baldwin',
      initials: 'JBa',
      color: '#654321',
      nationality: 'American',
      era: '1940s - 1980s',
      eraRange: '1940s-1980s',
      categories: ['literature'],
      connections: [
        { year: '1948', venue: 'Les Deux Magots', description: 'Arrived in Paris as a young writer and frequented the literary cafes.', source: 'Baldwin biographies' },
        { year: '1949', venue: 'Hotel de Verneuil', description: 'Lived in cheap Left Bank hotels while finishing Go Tell It on the Mountain.', source: 'Baldwin correspondence' },
        { year: '1953', venue: 'Cafe de Flore', description: 'Published Go Tell It on the Mountain while writing at Saint-Germain cafes.', source: 'Publishing records' },
        { year: '1956', venue: 'Sorbonne', description: 'Attended the Congress of Black Writers and Artists at the Sorbonne.', source: 'Conference records' },
        { year: '1972', venue: 'Saint-Paul-de-Vence (via Paris)', description: 'Continued to visit Paris frequently from his home in the south of France.', source: 'Baldwin correspondence' }
      ]
    },
    {
      id: 'jean-seberg',
      name: 'Jean Seberg',
      initials: 'JSe',
      color: '#87CEEB',
      nationality: 'American',
      era: '1950s - 1970s',
      eraRange: '1950s-1970s',
      categories: ['film'],
      connections: [
        { year: '1957', venue: 'Studios de Boulogne', description: 'Cast in Otto Premigers Saint Joan; worked at Paris studios.', source: 'Film production records' },
        { year: '1960', venue: 'Champs-Elysees', description: 'Starred in Breathless, filmed on the Champs-Elysees, becoming a New Wave icon.', source: 'Cahiers du Cinema' },
        { year: '1963', venue: 'Rue du Bac', description: 'Settled in the 7th arrondissement; became a Parisian by adoption.', source: 'Biographies' },
        { year: '1968', venue: 'Cafe de Flore', description: 'Active in the Parisian intellectual scene during the May 68 protests.', source: 'Press archives' }
      ]
    },
    {
      id: 'edgar-degas',
      name: 'Edgar Degas',
      initials: 'ED',
      color: '#DAA520',
      nationality: 'French',
      era: '1860s - 1910s',
      eraRange: '1860s-1910s',
      categories: ['art'],
      connections: [
        { year: '1862', venue: 'The Louvre', description: 'Met Edouard Manet while copying paintings at the Louvre.', source: 'Art history records' },
        { year: '1874', venue: 'Boulevard des Capucines', description: 'Exhibited at the first Impressionist exhibition alongside Monet and Renoir.', source: 'Exhibition catalogue 1874' },
        { year: '1876', venue: 'Opera Garnier', description: 'Created his legendary paintings and sculptures of dancers at the Paris Opera.', source: 'Musee dOrsay records' },
        { year: '1886', venue: 'Galerie Durand-Ruel', description: 'Exhibited works at the final Impressionist exhibition.', source: 'Gallery archives' },
        { year: '1917', venue: 'Montmartre Cemetery', description: 'Buried at Montmartre Cemetery after a lifetime in Paris.', source: 'Cemetery records' }
      ]
    },
    {
      id: 'kanye-west',
      name: 'Kanye West',
      initials: 'KW',
      color: '#3D3D3D',
      nationality: 'American',
      era: '2000s - Present',
      eraRange: '2000s-2020s',
      categories: ['music', 'fashion'],
      connections: [
        { year: '2009', venue: 'Grand Palais', description: 'Attended Paris Fashion Week shows as a front row fixture.', source: 'Fashion press' },
        { year: '2011', venue: 'Hotel Le Meurice', description: 'Stayed while working on fashion collaborations in Paris.', source: 'Press reports' },
        { year: '2014', venue: 'Versailles', description: 'Married Kim Kardashian at the Palace of Versailles in a lavish ceremony.', source: 'Press archives' },
        { year: '2016', venue: 'Palais de Tokyo', description: 'Debuted Yeezy Season collections during Paris Fashion Week.', source: 'Fashion press' },
        { year: '2022', venue: 'Balenciaga HQ', description: 'Collaborated with Balenciaga; attended Paris shows.', source: 'Fashion press' }
      ]
    },
    {
      id: 'kim-kardashian',
      name: 'Kim Kardashian',
      initials: 'KK',
      color: '#C4A882',
      nationality: 'American',
      era: '2010s - Present',
      eraRange: '2010s-2020s',
      categories: ['fashion'],
      connections: [
        { year: '2012', venue: 'Grand Palais', description: 'First major Paris Fashion Week appearance, front row at multiple shows.', source: 'Fashion press' },
        { year: '2014', venue: 'Versailles', description: 'Pre-wedding celebrations at the Palace of Versailles.', source: 'Press archives' },
        { year: '2016', venue: 'Hotel de Pourtalès', description: 'Stayed at this luxury residence during Paris Fashion Week.', source: 'Press reports' },
        { year: '2019', venue: 'Grand Palais', description: 'Front row at Chanel and Dior during Haute Couture Week.', source: 'Fashion press' }
      ]
    },
    {
      id: 'victor-hugo',
      name: 'Victor Hugo',
      initials: 'VH',
      color: '#4A3728',
      nationality: 'French',
      era: '1820s - 1880s',
      eraRange: '1820s-1880s',
      categories: ['literature'],
      connections: [
        { year: '1831', venue: 'Notre-Dame Cathedral', description: 'Published The Hunchback of Notre-Dame, inspired by the cathedral.', source: 'Publishing records' },
        { year: '1841', venue: 'Academie Francaise', description: 'Elected to the Academie Francaise at the Institut de France.', source: 'Academie records' },
        { year: '1862', venue: 'Place des Vosges', description: 'Lived at 6 Place des Vosges, now the Maison de Victor Hugo museum.', source: 'Museum records' },
        { year: '1870', venue: 'Gare du Nord', description: 'Returned from exile to a heroes welcome at the Gare du Nord.', source: 'Press archives' },
        { year: '1885', venue: 'Pantheon', description: 'His funeral procession drew two million mourners; interred at the Pantheon.', source: 'Government records' }
      ]
    },
    {
      id: 'josephine-de-beauharnais',
      name: 'Empress Josephine',
      initials: 'EJ',
      color: '#8B7D6B',
      nationality: 'French-Martiniquais',
      era: '1790s - 1810s',
      eraRange: '1790s-1810s',
      categories: ['royalty-politics', 'fashion'],
      connections: [
        { year: '1796', venue: 'Mairie du 2e', description: 'Married Napoleon Bonaparte in a civil ceremony.', source: 'Historical records' },
        { year: '1804', venue: 'Notre-Dame Cathedral', description: 'Crowned Empress alongside Napoleon in the coronation ceremony.', source: 'Historical records' },
        { year: '1805', venue: 'Tuileries Palace', description: 'Reigned as Empress from the Tuileries Palace.', source: 'Court records' },
        { year: '1809', venue: 'Chateau de Malmaison', description: 'Retired to her beloved Malmaison estate after the divorce.', source: 'Historical records' }
      ]
    },
    {
      id: 'toulouse-lautrec',
      name: 'Henri de Toulouse-Lautrec',
      initials: 'TL',
      color: '#B22222',
      nationality: 'French',
      era: '1880s - 1900s',
      eraRange: '1880s-1900s',
      categories: ['art'],
      connections: [
        { year: '1882', venue: 'Montmartre', description: 'Moved to Montmartre and immersed himself in the bohemian quarter.', source: 'Lautrec biographies' },
        { year: '1889', venue: 'Moulin Rouge', description: 'Created the iconic Moulin Rouge poster that defined the Belle Epoque.', source: 'Moulin Rouge archives' },
        { year: '1892', venue: 'Le Chat Noir', description: 'Frequented the legendary Montmartre cabaret and created lithographs.', source: 'Cabaret archives' },
        { year: '1895', venue: 'Moulin Rouge', description: 'Continued documenting Parisian nightlife in his distinctive style.', source: 'Art history records' }
      ]
    },
    {
      id: 'man-ray',
      name: 'Man Ray',
      initials: 'MR',
      color: '#696969',
      nationality: 'American',
      era: '1920s - 1970s',
      eraRange: '1920s-1970s',
      categories: ['art'],
      connections: [
        { year: '1921', venue: 'Montparnasse', description: 'Arrived in Paris and joined the Dada and Surrealist movements.', source: 'Man Ray autobiography' },
        { year: '1924', venue: 'Galerie Surrealiste', description: 'Exhibited photographs and rayographs at Surrealist galleries.', source: 'Gallery records' },
        { year: '1929', venue: 'Montparnasse', description: 'Photographed the Parisian avant-garde including Kiki de Montparnasse.', source: 'Photographic archives' },
        { year: '1934', venue: 'Galerie des Cahiers dArt', description: 'Major exhibition of photographs and objects.', source: 'Gallery records' },
        { year: '1976', venue: 'Montparnasse Cemetery', description: 'Buried at Montparnasse Cemetery with his wife Juliet.', source: 'Cemetery records' }
      ]
    },
    {
      id: 'serge-gainsbourg',
      name: 'Serge Gainsbourg',
      initials: 'SG',
      color: '#4F4F4F',
      nationality: 'French',
      era: '1950s - 1991',
      eraRange: '1950s-1990s',
      categories: ['music'],
      connections: [
        { year: '1958', venue: 'Milord lArsouille', description: 'Early performances at this Left Bank cabaret club.', source: 'Music biographies' },
        { year: '1964', venue: 'Olympia', description: 'Performed at the legendary music hall.', source: 'Olympia archives' },
        { year: '1969', venue: 'Studios Davout', description: 'Recorded Je taime... moi non plus with Jane Birkin.', source: 'Recording studio records' },
        { year: '1972', venue: '5bis Rue de Verneuil', description: 'Moved into his legendary house on Rue de Verneuil in the 7th.', source: 'Biographies' },
        { year: '1991', venue: 'Montparnasse Cemetery', description: 'Buried at Montparnasse; his Rue de Verneuil house remains a pilgrimage site.', source: 'Cemetery records' }
      ]
    },
    {
      id: 'jane-birkin',
      name: 'Jane Birkin',
      initials: 'JBi',
      color: '#C9B8A5',
      nationality: 'British-French',
      era: '1960s - 2020s',
      eraRange: '1960s-2020s',
      categories: ['film', 'music', 'fashion'],
      connections: [
        { year: '1968', venue: 'Studios de Boulogne', description: 'Arrived in Paris to film Slogan with Serge Gainsbourg.', source: 'Film production records' },
        { year: '1969', venue: 'Cafe de Flore', description: 'Became a fixture of Saint-Germain bohemian life.', source: 'Social chronicles' },
        { year: '1972', venue: '5bis Rue de Verneuil', description: 'Lived with Gainsbourg in the legendary Rue de Verneuil house.', source: 'Biographies' },
        { year: '1984', venue: 'Hermes', description: 'Inspired the creation of the iconic Birkin bag during a chance meeting with Jean-Louis Dumas on a Paris-London flight.', source: 'Hermes archives' },
        { year: '2023', venue: 'Eglise Saint-Roch', description: 'Her funeral at Saint-Roch drew thousands of mourners to the streets of Paris.', source: 'Press archives' }
      ]
    },
    {
      id: 'lady-gaga',
      name: 'Lady Gaga',
      initials: 'LG',
      color: '#FF69B4',
      nationality: 'American',
      era: '2000s - Present',
      eraRange: '2000s-2020s',
      categories: ['music', 'fashion'],
      connections: [
        { year: '2010', venue: 'Grand Palais', description: 'Attended Paris Fashion Week shows in her most avant-garde outfits.', source: 'Fashion press' },
        { year: '2012', venue: 'Palais Omnisports de Bercy', description: 'Performed for sold-out crowds during the Born This Way Ball.', source: 'Tour records' },
        { year: '2016', venue: 'Ritz Paris', description: 'Stayed at the Ritz during promotional visits.', source: 'Press reports' },
        { year: '2024', venue: 'Eiffel Tower', description: 'Performed at the opening ceremony of the Paris Olympics.', source: 'Olympics broadcast records' }
      ]
    },
    {
      id: 'pharrell-williams',
      name: 'Pharrell Williams',
      initials: 'PW',
      color: '#FFD700',
      nationality: 'American',
      era: '2000s - Present',
      eraRange: '2000s-2020s',
      categories: ['music', 'fashion'],
      connections: [
        { year: '2014', venue: 'Grand Palais', description: 'Performed at Chanel fashion shows hosted by Karl Lagerfeld.', source: 'Fashion press' },
        { year: '2019', venue: 'Louvre', description: 'Performed at a private Louis Vuitton event inside the museum.', source: 'Fashion press' },
        { year: '2023', venue: 'Pont Neuf', description: 'Debuted as Louis Vuitton mens creative director with a show on the Pont Neuf.', source: 'Louis Vuitton press' },
        { year: '2024', venue: 'Palais de Tokyo', description: 'Continued presenting Louis Vuitton collections during Paris Fashion Week.', source: 'Fashion press' }
      ]
    },
    {
      id: 'naomi-campbell',
      name: 'Naomi Campbell',
      initials: 'NC',
      color: '#8B4513',
      nationality: 'British',
      era: '1980s - Present',
      eraRange: '1980s-2020s',
      categories: ['fashion'],
      connections: [
        { year: '1987', venue: 'Grand Palais', description: 'Walked her first Paris Fashion Week runway as a teenager.', source: 'Fashion press' },
        { year: '1991', venue: 'Grand Palais', description: 'Opened and closed shows for Chanel and Versace at the height of the supermodel era.', source: 'Fashion press' },
        { year: '1994', venue: 'Cafe de Flore', description: 'A regular presence in Parisian social life and nightlife.', source: 'Social chronicles' },
        { year: '2010', venue: 'Hotel de Crillon', description: 'Attended numerous Parisian galas and charity events.', source: 'Press reports' },
        { year: '2024', venue: 'Grand Palais', description: 'Continued walking Paris runways in her fifth decade of modeling.', source: 'Fashion press' }
      ]
    },
    {
      id: 'f-scott-fitzgerald',
      name: 'F. Scott Fitzgerald',
      initials: 'FSF',
      color: '#2E8B57',
      nationality: 'American',
      era: '1920s - 1930s',
      eraRange: '1920s-1930s',
      categories: ['literature'],
      connections: [
        { year: '1924', venue: 'Ritz Paris', description: 'Arrived in Paris with Zelda; frequented the Ritz Bar.', source: 'Fitzgerald biographies' },
        { year: '1925', venue: 'Le Dingo Bar', description: 'Met Hemingway for the first time at this Montparnasse bar.', source: 'A Moveable Feast, Hemingway' },
        { year: '1925', venue: 'Les Deux Magots', description: 'Frequented Left Bank literary cafes while living in Paris.', source: 'Fitzgerald correspondence' },
        { year: '1926', venue: 'Ritz Paris', description: 'Continued living extravagantly in Paris during the Jazz Age.', source: 'Fitzgerald biographies' },
        { year: '1929', venue: 'Shakespeare and Company', description: 'Visited Sylvia Beachs bookshop among the Lost Generation writers.', source: 'Bookshop archives' }
      ]
    },
    {
      id: 'marie-antoinette',
      name: 'Marie Antoinette',
      initials: 'MA',
      color: '#FFB6C1',
      nationality: 'Austrian-French',
      era: '1770s - 1793',
      eraRange: '1770s-1790s',
      categories: ['royalty-politics', 'fashion'],
      connections: [
        { year: '1770', venue: 'Versailles', description: 'Arrived at Versailles as a 14-year-old Austrian archduchess to marry the future Louis XVI.', source: 'Royal archives' },
        { year: '1774', venue: 'Versailles', description: 'Became Queen of France; set extravagant fashion trends at court.', source: 'Court records' },
        { year: '1783', venue: 'Petit Trianon', description: 'Retreated to her private estate within Versailles, the Petit Trianon.', source: 'Royal archives' },
        { year: '1789', venue: 'Tuileries Palace', description: 'Forced to leave Versailles for the Tuileries Palace during the Revolution.', source: 'Historical records' },
        { year: '1793', venue: 'Place de la Concorde', description: 'Executed at what was then the Place de la Revolution.', source: 'Historical records' }
      ]
    },
    {
      id: 'sophia-loren',
      name: 'Sophia Loren',
      initials: 'SL',
      color: '#CD853F',
      nationality: 'Italian',
      era: '1950s - 2000s',
      eraRange: '1950s-2000s',
      categories: ['film', 'fashion'],
      connections: [
        { year: '1958', venue: 'Hotel Plaza Athenee', description: 'Stayed at the palace hotel during Paris visits for film promotions.', source: 'Hotel records' },
        { year: '1961', venue: 'Hotel de Crillon', description: 'Attended galas celebrating her international film career.', source: 'Press archives' },
        { year: '1966', venue: 'Grand Palais', description: 'Attended Paris fashion shows and became a couture client.', source: 'Fashion press' },
        { year: '1976', venue: 'Ritz Paris', description: 'Regular guest at the Ritz during Paris press events.', source: 'Hotel records' }
      ]
    },
    {
      id: 'alexander-mcqueen',
      name: 'Alexander McQueen',
      initials: 'AM',
      color: '#1C1C1C',
      nationality: 'British',
      era: '1990s - 2010',
      eraRange: '1990s-2010s',
      categories: ['fashion'],
      connections: [
        { year: '1996', venue: 'Grand Palais', description: 'Appointed head designer at Givenchy; showed first Paris collections.', source: 'Givenchy archives' },
        { year: '1997', venue: 'Grand Palais', description: 'Presented controversial and groundbreaking Givenchy couture shows.', source: 'Fashion press' },
        { year: '1999', venue: 'Grand Palais', description: 'Continued pushing boundaries with theatrical Paris runway shows.', source: 'Fashion press' },
        { year: '2003', venue: 'Palais Omnisports de Bercy', description: 'Showed his own label at increasingly spectacular Paris venues.', source: 'Fashion press' }
      ]
    }
  ];

  // ── Venue Database ──────────────────────────────────────────
  var venues = [
    { id: 'ritz-paris', name: 'Ritz Paris', type: 'Hotel', address: '15 Place Vendome, 1st', arrondissement: 1, lat: 48.8683, lng: 2.3290, prestige: 98, description: 'The undisputed palace of Parisian luxury. Home to Coco Chanel for over 30 years, frequented by Hemingway, Proust, and every generation of celebrity royalty since 1898.', celebrityVisitors: ['Coco Chanel', 'Ernest Hemingway', 'Princess Diana', 'Charlie Chaplin', 'Audrey Hepburn', 'Marcel Proust', 'Elton John', 'Marlene Dietrich', 'F. Scott Fitzgerald', 'Sophia Loren', 'Lady Gaga'] },
    { id: 'cafe-de-flore', name: 'Cafe de Flore', type: 'Cafe', address: '172 Boulevard Saint-Germain, 6th', arrondissement: 6, lat: 48.8540, lng: 2.3325, prestige: 92, description: 'The intellectual throne of Saint-Germain-des-Pres. Sartre, de Beauvoir, Picasso, and Karl Lagerfeld all claimed their regular tables.', celebrityVisitors: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Pablo Picasso', 'Ernest Hemingway', 'Karl Lagerfeld', 'Coco Chanel', 'Duke Ellington', 'Juliette Greco', 'Jean Seberg', 'James Baldwin', 'Jane Birkin', 'Naomi Campbell'] },
    { id: 'grand-palais', name: 'Grand Palais', type: 'Monument', address: '3 Avenue du General Eisenhower, 8th', arrondissement: 8, lat: 48.8662, lng: 2.3125, prestige: 96, description: 'Chanel\'s iconic runway cathedral and the stage for Paris\'s grandest exhibitions.', celebrityVisitors: ['Karl Lagerfeld', 'Audrey Hepburn', 'Beyonce', 'Zendaya', 'Rihanna', 'Coco Chanel', 'Henri Matisse', 'Grace Kelly', 'Kanye West', 'Kim Kardashian', 'Lady Gaga', 'Pharrell Williams', 'Naomi Campbell', 'Sophia Loren', 'Alexander McQueen'] },
    { id: 'the-louvre', name: 'The Louvre', type: 'Museum', address: 'Rue de Rivoli, 1st', arrondissement: 1, lat: 48.8606, lng: 2.3376, prestige: 97, description: 'The world\'s most visited museum. From Napoleon\'s triumphs to Beyonce\'s "Apeshit" video.', celebrityVisitors: ['Beyonce', 'Audrey Hepburn', 'Napoleon Bonaparte', 'Claude Monet', 'Edgar Degas', 'Pharrell Williams'] },
    { id: 'le-meurice', name: 'Le Meurice', type: 'Hotel', address: '228 Rue de Rivoli, 1st', arrondissement: 1, lat: 48.8650, lng: 2.3280, prestige: 93, description: 'Salvador Dali spent a month here every year for three decades. Palatial hotel blending heritage with celebrity allure.', celebrityVisitors: ['Salvador Dali', 'Beyonce', 'Kanye West'] },
    { id: 'les-deux-magots', name: 'Les Deux Magots', type: 'Cafe', address: '6 Place Saint-Germain-des-Pres, 6th', arrondissement: 6, lat: 48.8541, lng: 2.3334, prestige: 88, description: 'Legendary literary cafe where Hemingway met Fitzgerald and existentialism was debated.', celebrityVisitors: ['Ernest Hemingway', 'Jean-Paul Sartre', 'Simone de Beauvoir', 'James Baldwin', 'F. Scott Fitzgerald'] },
    { id: 'moulin-rouge', name: 'Moulin Rouge', type: 'Theater', address: '82 Boulevard de Clichy, 18th', arrondissement: 18, lat: 48.8841, lng: 2.3322, prestige: 90, description: 'The world\'s most famous cabaret, immortalized in art, film, and popular culture since 1889.', celebrityVisitors: ['Edith Piaf', 'Henri de Toulouse-Lautrec', 'Duke Ellington'] },
    { id: 'pere-lachaise', name: 'Pere Lachaise Cemetery', type: 'Cemetery', address: '16 Rue du Repos, 20th', arrondissement: 20, lat: 48.8614, lng: 2.3936, prestige: 88, description: 'The most visited cemetery in the world. Final resting place of Jim Morrison, Oscar Wilde, Edith Piaf, and Frederic Chopin.', celebrityVisitors: ['Jim Morrison', 'Oscar Wilde', 'Edith Piaf', 'Frederic Chopin', 'Marcel Proust'] },
    { id: 'shakespeare-and-company', name: 'Shakespeare and Company', type: 'Cafe', address: '37 Rue de la Bucherie, 5th', arrondissement: 5, lat: 48.8526, lng: 2.3471, prestige: 85, description: 'The legendary Left Bank bookshop, gathering place for the Lost Generation and literary pilgrims ever since.', celebrityVisitors: ['Ernest Hemingway', 'Gertrude Stein', 'Jim Morrison', 'F. Scott Fitzgerald'] },
    { id: 'hotel-plaza-athenee', name: 'Hotel Plaza Athenee', type: 'Hotel', address: '25 Avenue Montaigne, 8th', arrondissement: 8, lat: 48.8662, lng: 2.3039, prestige: 94, description: 'Avenue Montaigne palace hotel, neighbor to Dior and the couture houses.', celebrityVisitors: ['Audrey Hepburn', 'Christian Dior', 'Marlene Dietrich', 'Grace Kelly', 'Sophia Loren'] },
    { id: 'palais-de-tokyo', name: 'Palais de Tokyo', type: 'Museum', address: '13 Avenue du President Wilson, 16th', arrondissement: 16, lat: 48.8640, lng: 2.2973, prestige: 82, description: 'Contemporary art center and fashion show venue. Regular host for Paris Fashion Week events.', celebrityVisitors: ['Beyonce', 'Zendaya', 'Rihanna', 'Coco Chanel', 'Kanye West', 'Pharrell Williams'] },
    { id: 'olympia', name: 'Olympia', type: 'Theater', address: '28 Boulevard des Capucines, 9th', arrondissement: 9, lat: 48.8707, lng: 2.3299, prestige: 87, description: 'Legendary music hall where Edith Piaf, Josephine Baker, and generations of performers have played.', celebrityVisitors: ['Edith Piaf', 'Josephine Baker', 'Elton John', 'Marlene Dietrich', 'Duke Ellington', 'Miles Davis', 'Juliette Greco', 'Serge Gainsbourg'] },
    { id: 'hotel-de-crillon', name: 'Hotel de Crillon', type: 'Hotel', address: '10 Place de la Concorde, 8th', arrondissement: 8, lat: 48.8676, lng: 2.3218, prestige: 95, description: 'Place de la Concorde palace hotel. A diplomatic and celebrity landmark for over two centuries.', celebrityVisitors: ['Princess Diana', 'Beyonce', 'Zendaya', 'Josephine Baker', 'Coco Chanel', 'Sophia Loren', 'Naomi Campbell'] },
    { id: 'centre-pompidou', name: 'Centre Pompidou', type: 'Museum', address: 'Place Georges-Pompidou, 4th', arrondissement: 4, lat: 48.8607, lng: 2.3522, prestige: 89, description: 'The radical modernist museum of contemporary art, hosting major exhibitions and celebrity cultural events.', celebrityVisitors: ['Salvador Dali'] },
    { id: 'versailles', name: 'Palace of Versailles', type: 'Monument', address: 'Place dArmes, Versailles', arrondissement: 0, lat: 48.8049, lng: 2.1204, prestige: 97, description: 'The ultimate expression of French royal power and luxury, now a museum and event venue.', celebrityVisitors: ['Princess Diana', 'Rihanna', 'Christian Dior', 'Elton John', 'Grace Kelly', 'Kanye West', 'Kim Kardashian', 'Marie Antoinette'] },
    { id: 'les-invalides', name: 'Les Invalides', type: 'Monument', address: '129 Rue de Grenelle, 7th', arrondissement: 7, lat: 48.8567, lng: 2.3125, prestige: 91, description: 'Military complex housing Napoleon\'s tomb, a monument to French power and history.', celebrityVisitors: ['Napoleon Bonaparte'] },
    { id: 'eiffel-tower', name: 'Eiffel Tower', type: 'Monument', address: 'Champ de Mars, 7th', arrondissement: 7, lat: 48.8584, lng: 2.2945, prestige: 99, description: 'The most iconic landmark in the world. Featured in hundreds of films and countless celebrity moments.', celebrityVisitors: ['Audrey Hepburn', 'Gene Kelly', 'Lady Gaga'] },
    { id: 'le-grand-rex', name: 'Le Grand Rex', type: 'Theater', address: '1 Boulevard Poissonniere, 2nd', arrondissement: 2, lat: 48.8710, lng: 2.3478, prestige: 85, description: 'Europe\'s largest cinema auditorium, a 1932 Art Deco landmark on the Grands Boulevards.', celebrityVisitors: ['Jean-Paul Belmondo'] },
    { id: 'theatre-des-champs-elysees', name: 'Theatre des Champs-Elysees', type: 'Theater', address: '15 Avenue Montaigne, 8th', arrondissement: 8, lat: 48.8653, lng: 2.3044, prestige: 90, description: 'Art Deco theater where Josephine Baker debuted and Coco Chanel designed for the Ballets Russes.', celebrityVisitors: ['Josephine Baker', 'Coco Chanel', 'Charlie Chaplin', 'Duke Ellington'] },
    { id: 'cinematheque-francaise', name: 'Cinematheque Francaise', type: 'Theater', address: '51 Rue de Bercy, 12th', arrondissement: 12, lat: 48.8365, lng: 2.3820, prestige: 84, description: 'The temple of cinephilia in Bercy, hosting retrospectives and arthouse premieres.', celebrityVisitors: ['Charlie Chaplin', 'Timothee Chalamet'] },
    { id: 'folies-bergere', name: 'Folies Bergere', type: 'Theater', address: '32 Rue Richer, 9th', arrondissement: 9, lat: 48.8745, lng: 2.3440, prestige: 86, description: 'Legendary music hall where Josephine Baker performed her legendary banana dance.', celebrityVisitors: ['Josephine Baker'] },
    { id: 'salle-pleyel', name: 'Salle Pleyel', type: 'Theater', address: '252 Rue du Faubourg Saint-Honore, 8th', arrondissement: 8, lat: 48.8766, lng: 2.3003, prestige: 88, description: 'Storied concert hall and host of the Cesar Awards ceremony.', celebrityVisitors: ['Frederic Chopin', 'Duke Ellington', 'Miles Davis'] },
    { id: 'arc-de-triomphe', name: 'Arc de Triomphe', type: 'Monument', address: 'Place Charles de Gaulle, 8th', arrondissement: 8, lat: 48.8738, lng: 2.2950, prestige: 95, description: 'Commissioned by Napoleon, the Arc de Triomphe is one of Paris\'s most recognizable monuments.', celebrityVisitors: ['Napoleon Bonaparte'] },
    { id: 'notre-dame', name: 'Notre-Dame Cathedral', type: 'Monument', address: '6 Parvis Notre-Dame, 4th', arrondissement: 4, lat: 48.8530, lng: 2.3499, prestige: 96, description: 'Gothic masterpiece where Napoleon crowned himself Emperor, now undergoing historic restoration.', celebrityVisitors: ['Napoleon Bonaparte', 'Victor Hugo', 'Empress Josephine', 'Marie Antoinette'] },
    { id: 'pantheon', name: 'Pantheon', type: 'Monument', address: 'Place du Pantheon, 5th', arrondissement: 5, lat: 48.8462, lng: 2.3461, prestige: 93, description: 'France\'s secular temple honoring its greatest citizens, including Josephine Baker.', celebrityVisitors: ['Josephine Baker', 'Victor Hugo'] },
    { id: 'musee-rodin', name: 'Musee Rodin', type: 'Museum', address: '77 Rue de Varenne, 7th', arrondissement: 7, lat: 48.8554, lng: 2.3159, prestige: 86, description: 'Beautiful museum and garden featured in Midnight in Paris and fashion events.', celebrityVisitors: [] },
    { id: 'pont-alexandre-iii', name: 'Pont Alexandre III', type: 'Monument', address: 'Pont Alexandre III, 7th/8th', arrondissement: 7, lat: 48.8637, lng: 2.3136, prestige: 88, description: 'The most ornate bridge in Paris, featured in Midnight in Paris and countless fashion shoots.', celebrityVisitors: [] },
    { id: 'maxims', name: "Maxim's", type: 'Restaurant', address: '3 Rue Royale, 8th', arrondissement: 8, lat: 48.8671, lng: 2.3236, prestige: 87, description: 'Belle Epoque restaurant synonymous with Parisian luxury dining and celebrity patronage.', celebrityVisitors: ['Coco Chanel'] },
    { id: 'la-closerie-des-lilas', name: 'La Closerie des Lilas', type: 'Restaurant', address: '171 Boulevard du Montparnasse, 6th', arrondissement: 6, lat: 48.8434, lng: 2.3372, prestige: 84, description: 'Hemingway\'s favorite writing cafe where he completed The Sun Also Rises.', celebrityVisitors: ['Ernest Hemingway'] },
    { id: 'brasserie-lipp', name: 'Brasserie Lipp', type: 'Restaurant', address: '151 Boulevard Saint-Germain, 6th', arrondissement: 6, lat: 48.8540, lng: 2.3340, prestige: 83, description: 'Iconic Saint-Germain brasserie frequented by literary and political figures.', celebrityVisitors: ['Ernest Hemingway'] },
    { id: 'montparnasse-cemetery', name: 'Montparnasse Cemetery', type: 'Cemetery', address: '3 Boulevard Edgar Quinet, 14th', arrondissement: 14, lat: 48.8389, lng: 2.3263, prestige: 82, description: 'The Left Bank resting place of Sartre, Beauvoir, Gainsbourg, and Man Ray — a literary and artistic counterpart to Pere Lachaise.', celebrityVisitors: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Serge Gainsbourg', 'Man Ray'] },
    { id: 'opera-garnier', name: 'Opera Garnier', type: 'Theater', address: '8 Rue Scribe, 9th', arrondissement: 9, lat: 48.8720, lng: 2.3316, prestige: 94, description: 'The ornate 1875 opera house, inspiration for The Phantom of the Opera and home to Degas\'s dancer paintings.', celebrityVisitors: ['Edgar Degas'] },
    { id: 'musee-de-lorangerie', name: 'Musee de lOrangerie', type: 'Museum', address: 'Jardin des Tuileries, 1st', arrondissement: 1, lat: 48.8638, lng: 2.3226, prestige: 88, description: 'Home to Monet\'s immersive Water Lilies murals, donated by the artist to the French state.', celebrityVisitors: ['Claude Monet'] },
    { id: 'pont-neuf', name: 'Pont Neuf', type: 'Monument', address: 'Pont Neuf, 1st', arrondissement: 1, lat: 48.8568, lng: 2.3413, prestige: 86, description: 'The oldest standing bridge in Paris, used by Pharrell Williams for his debut Louis Vuitton show.', celebrityVisitors: ['Pharrell Williams'] },
    { id: 'place-des-vosges', name: 'Place des Vosges', type: 'Monument', address: 'Place des Vosges, 4th', arrondissement: 4, lat: 48.8556, lng: 2.3655, prestige: 87, description: 'Paris\'s oldest planned square and home of the Victor Hugo museum at number 6.', celebrityVisitors: ['Victor Hugo'] }
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
