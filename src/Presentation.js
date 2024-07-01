import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "1. Architektura przetwarzania informacji w IOT",
    content: [
      "Architektura fizyczna: klient-serwer, mesh, gwiazda",
      "Architektura logiczna: warstwowa",
      "Standardy: WiFi, Bluetooth, ZigBee, Z-Wave, LoRaWAN, LTE"
    ]
  },
  {
    title: "2. Architektura REST",
    content: [
      "Styl architektury oprogramowania dla systemów rozproszonych",
      "Zasady RESTful API: separacja UI, bezstanowość, cacheability, endpointy",
      "Metody: GET, POST, PUT, DELETE, PATCH",
      "Zalety: uniwersalność, łatwość obsługi, jednoznaczność"
    ]
  },
  {
    title: "3. Internet rzeczy - cele i zastosowania",
    content: [
      "Cele: inteligentne przestrzenie, automatyczna kontrola systemów",
      "Konstrukcja: warstwa fizyczna, brzeg, chmura",
      "Zastosowania: smart home, smart city, medycyna, fabryki",
      "Korzyści: oszczędność czasu i pieniędzy, wygoda",
      "Zagrożenia: koszt, prywatność, bezpieczeństwo"
    ]
  },
  {
    title: "4. Charakterystyka dobrze zaprojektowanej gry",
    content: [
      "Jasny cel, ogłaszanie zmian",
      "Wiarygodne zdarzenia/fizyka, odpowiedni dźwięk",
      "Odpowiednie tempo gry",
      "Dobrze zagospodarowany świat gry",
      "Ciekawe mechaniki gry i rozgrywka"
    ]
  },
  {
    title: "5. Charakterystyka informatycznych systemów mobilnych",
    content: [
      "Rozwój: spadek cen, wyższa dostępność, postęp technologiczny",
      "Zalety: dostęp niezależnie od miejsca i czasu, skalowalność",
      "Cechy: brak wspólnej pamięci, wymiana wiadomości, asynchronizm"
    ]
  },
  {
    title: "6. Definicja i modele przetwarzania Big Data",
    content: [
      "Big Data: duże, zmienne i różnorodne zbiory danych",
      "Model 3V: Volume, Velocity, Variety",
      "Rozszerzony o Veracity i Value",
      "Polskie 4W: Wykorzystanie, Wnioskowanie, Wzbogacanie, Weryfikacja"
    ]
  },
  {
    title: "7. Definiowanie schematów dokumentów XML",
    content: [
      "XML: uniwersalny język znaczników",
      "DTD: ogólny schemat dokumentu",
      "XML Schema: zastępuje DTD, więcej opcji",
      "Różnice: składnia, typy danych, rozszerzalność"
    ]
  },
  {
    title: "8. Harmonogramowanie projektów informatycznych",
    content: [
      "Rozpoznanie: etapy, daty, kamienie milowe, zasoby, sekwencje zadań",
      "Techniki: wykres Gantta, diagramy sieciowe, ścieżka krytyczna",
      "Tworzenie: podział na zadania, oszacowanie czasu, organizacja równoległa"
    ]
  },
  {
    title: "9. Heurystyki użyteczności Nielsena",
    content: [
      "#1: Pokazuj status systemu",
      "#2: Zgodność systemu z rzeczywistością",
      "#3: Kontrola użytkownika",
      "#4: Standardy i spójność",
      "#5: Zapobieganie błędom",
      "#6: Rozpoznawanie zamiast przypominania",
      "#7: Elastyczność i efektywność",
      "#8: Estetyka i umiar",
      "#9: Obsługa błędów",
      "#10: Pomoc i dokumentacja"
    ]
  },
  {
    title: "10. Indeksowanie i wyszukiwanie informacji multimedialnych",
    content: [
      "Multimedia: różne formy informacji i przekazu",
      "Problem: jak wyszukiwać w audio/wideo?",
      "Rozwiązanie 1: metadane (ręczne lub automatyczne)",
      "Rozwiązanie 2: AI do bezpośredniego wyszukiwania"
    ]
  },
  {
    title: "11. Inteligencja obliczeniowa - metody i zastosowania",
    content: [
      "Metody: sieci neuronowe, logika rozmyta, algorytmy ewolucyjne",
      "Zastosowania: analiza danych, detekcja wzorców, systemy kontroli"
    ]
  },
  {
    title: "12. Inżynieria ontologii w Sieci Semantycznej",
    content: [
      "Sieć semantyczna: dane powiązane dla automatycznego przetwarzania",
      "Ontologia: formalna specyfikacja wycinka rzeczywistości",
      "Struktura: taksonomia, relacje, ograniczenia",
      "Projektowanie: jasność, koherencja, rozszerzalność"
    ]
  },
  {
    title: "13. Koszty w kosztorysie projektu informatycznego",
    content: [
      "Składniki: koszty osobowe, sprzęt, oprogramowanie, realizacja",
      "Szacowanie: metryki oparte na rozmiarze kodu i funkcjonalności",
      "Techniki: modelowanie algorytmiczne, ekspertyza, poprzednie projekty"
    ]
  },
  {
    title: "14. Metody i narzędzia badania doświadczeń użytkownika",
    content: [
      "Metody: wywiady, grupy fokusowe, paper prototyping, card sorting",
      "Narzędzia: Google Analytics, Balsamiq, Hotjar, SurveyMonkey"
    ]
  },
  {
    title: "15. Narzędzia analizy Big Data",
    content: [
      "Microsoft Power BI",
      "Tableau",
      "Google Analytics",
      "Looker Studio",
      "QlikView"
    ]
  },
  {
    title: "16. Podstawowe metody analizy dużych baz danych",
    content: [
      "Etapy: wybór danych, przetwarzanie, transformacja, eksploracja, interpretacja",
      "Metody: odkrywanie asocjacji, klastrowanie, wzorce sekwencji",
      "Odkrywanie klasyfikacji, podobieństwa w przebiegach czasowych"
    ]
  },
  {
    title: "17. Podstawowe metody i narzędzia inteligencji biznesowej",
    content: [
      "Inteligencja biznesowa: przekształcanie danych w wiedzę",
      "Metody: eksploracja danych i procesów, systemy ekspertowe",
      "Narzędzia: Google Analytics, Tableau, Microsoft Power BI, QlikView"
    ]
  },
  {
    title: "18. Rodzaje diagramów projektowych UML",
    content: [
      "UML: graficzny system wizualizacji i specyfikowania systemów",
      "Diagramy: przypadków użycia, klas, czynności, stanów",
      "Diagramy: komponentów, sekwencji, pakietów, przepływu danych"
    ]
  },
  {
    title: "19. Rodzaje dokumentacji systemu informatycznego",
    content: [
      "Raport z założeniami systemu",
      "Projekt techniczny",
      "Dokumentacja techniczna i użytkowa",
      "Materiały szkoleniowe i informacyjne",
      "Dokumentacja testów i wdrożeniowa"
    ]
  },
  {
    title: "20. Rola i zadania wydawcy gier komputerowych",
    content: [
      "Wydawca: firma publikująca gry komputerowe",
      "Zadania: tworzenie, marketing, reklama, finansowanie",
      "Funkcje: licencje, lokalizacja, dystrybucja",
      "Negocjacje umów, kampanie reklamowe, badania rynkowe"
    ]
  },
  {
    title: "21. Semantyczne wyszukiwania informacji w sieci Web",
    content: [
      "Algorytm Koliber -> Graf wiedzy",
      "Cechy: najtrafniejsze podsumowanie, konkretna rzecz, pogłębienie poszukiwań",
      "Analiza semantyczna i gramatyczna treści stron",
      "'Uczenie się' nowych powiązań i relacji"
    ]
  },
  {
    title: "22. Standardy opisu treści w Sieci Semantycznej",
    content: [
      "Sieć semantyczna: dane powiązane dla automatycznego przetwarzania",
      "Anotacja semantyczna: metadane opisujące obiekty domeny",
      "Ontologie: interpretacja metadanych",
      "Języki: RDF, OWL, XML"
    ]
  },
  {
    title: "23. Strategie lokalizacji użytkownika w systemach mobilnych",
    content: [
      "Wykorzystanie infrastruktury sieci GSM",
      "Metody: CELL ID, sektor komórki, czas",
      "GPS w telefonie",
      "Metoda pseudoodległościowa"
    ]
  },
  {
    title: "24. Sztuczna inteligencja a inteligencja obliczeniowa",
    content: [
      "Obliczenia inteligentne: część sztucznej inteligencji",
      "CI: percepcja i sterowanie, zachowania sensomotoryczne",
      "AI: wyższe czynności poznawcze, logika, rozumowanie",
      "Przykłady problemów: rozpoznawanie obrazów, sterowanie robotami"
    ]
  },
  {
    title: "25. Wielomodalna interakcja człowiek-komputer",
    content: [
      "Interakcja: naprzemienne wymienianie informacji użytkownik-komputer",
      "Systemy interakcyjne: wymagają znacznej interakcji z użytkownikiem",
      "Style interakcji: klawiszowo-modalny, bezpośredniej manipulacji",
      "Style interakcji: multimodalne, niebazujące na komendach, VR"
    ]
  },
  {
    title: "26. Zarządzanie ryzykiem w projektach informatycznych",
    content: [
      "Ryzyko: prawdopodobieństwo niepożądanego zdarzenia i jego wpływ",
      "Cykl zarządzania: identyfikacja, analiza, planowanie, kontrola",
      "Techniki identyfikacji: przegląd dokumentacji, burza mózgów, SWOT",
      "Earned Value Method: szacowanie kosztów projektu"
    ]
  },
  {
    title: "27. Zarządzanie zespołami ludzkimi w projektach informatycznych",
    content: [
      "Kierownik projektu: planowanie, organizowanie, motywowanie, kontrola",
      "Motywacja: spełnianie potrzeb zespołu",
      "Ergonomia pracy: atmosfera, komfort, sprzęt",
      "Etapy rozwoju zespołu: formowanie, burza, normowanie, wykonywanie",
      "Metodyki: Agile, XP, Scrum"
    ]
  },
  {
    title: "28. Zastosowanie inteligencji biznesowej do weryfikacji hipotez i KPI",
    content: [
      "KPI: kluczowe wskaźniki efektywności",
      "Mierzalne wartości pokazujące skuteczność osiągania celów",
      "Ograniczenie dużej ilości informacji do najważniejszych danych",
      "Przykłady: przychody ze sprzedaży, MRR, średnia wartość transakcji"
    ]
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {slides[currentSlide].content.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between w-full max-w-4xl mt-4">
        <button
          onClick={prevSlide}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <ChevronLeft className="mr-2" />
          Previous
        </button>
        <span className="text-xl font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={nextSlide}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;