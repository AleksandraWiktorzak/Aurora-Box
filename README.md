# Aurora-Box

Projekt przedstawia header strony internetowej, wykonany na podstawie pliku graficznego.

## Instalacja

- Aby wyświetlić stronę w przeglądarce musisz mieć zainstalowane środowisko `node.js`. Możesz je pobrać ze strony [Node.js](https://nodejs.org/en/), a następnie zainstalować na swoim komputerze.

- Pobierz mój projekt i otwórz go w swoim ulubionym edytorze kodu (np. Visual Studio Code).

- Otwórz terminal i wpisz komendę:
```html
npm install
```
Edytor zainstaluje wszystkie potrzebne wtyczki i udogodnienia wymagane do prawidłowego wyświatlania strony.

- Teraz wystarczy już tylko uruchomić moją stronę wpisując w terminal:
```html
gulp
```
Task runner odpali ją w oknie Twojej domyślnej przeglądarki.

## Opis i drobna pomoc

### Tutorial?

- Koszyk wyświetla się po najechaniu myszką na `ikonę koszyka` ale jeśli jesteś na widoku mobile, kliknij w nią dwukrotnie by otworzyć     oraz dwukotnie by zamknąć.

- Na widoku mobilnym `menu` otworzysz klikając w `hamburger menu`. Pierwsza pozycja jest interaktywna, możesz ją rozwinąć :)

- Na widoku desktop wybrane elementy zmieniają kolor po najechaniu na nie myszką, a `menu` rozwija się.

### Technika
- Moja strona jest przystosowana do urządzeń mobilnych. Możesz to sprawdzić! Wejdź na 
  [responsinator.com](https://www.responsinator.com/) i załaduj adres `http://localhost:3000/`. 
  - Przy mniejszej rozdzielczości elementy zmieniają nieco swój oryginalny layout. Dzięki temu strona jest czytelniejsza.

- Aby przyspieszyć ładowanie strony, zminifikowałam zdjęcia i kod html za pomocą task runnera `Gulp`.

- Rozłożyłam html na komponenty dzięki czemu łatwiej było mi skupić się na poszczególnych zadaniach.

- Odwzorowując layout, zamiast czystego `CSS` skorzystałam z preprocesora `Sass` dzięki któremu praca jest o wiele przyjemniejsza.
  - Zastosowałam `zmienne`, oraz metodykę `BEM`. Każdy komponent html ma swój własny plik `.scss`.

- Układając elementy strony, zastosowałam `layout model grid`.

- Użyłam pluginu `autoprefixer`, który wspomaga ujednolicenie layoutu na wszystkich przeglądarkach uwzględnionych przy tworzeniu strony   (Firefox (najnowsza), Chrome (najnowsza), Edge (najnowsza), Internet Explorer 11, Safari (najnowsza)).

- Nie obyło się też bez użycia `Java Script'u` dzięki któremu wybrane elementy są interatkywne.


![alt obrazek papugi](https://image.flaticon.com/icons/svg/375/375079.svg)
# Dziękuję za uwagę :)
