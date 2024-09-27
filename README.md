# To-Do-slutprodukt
Slutprodukt av allt lärande, den sista nystarten med to-do listan.

MIN PROCESS:
Jag skapade först ett repository på gitHub. Sedan clonade jag in den i arbetsmappen genom git bash. Jag har gjort en to-do list i ett annat repo, men jag vill göra om allt helt från scratch för att få en djupare förståelse av vad det är jag gör.
Jag förklarar och kommenterar mycket, då det är enda sättet för mig att begripa vad det är jag gör med min kod.

Jag startade med själva "benstrukturen" i html, sedan såg jag över vilka variabler och funktioner jag behöver i js. Jag listade dem och satte igång med att knacka mig fram med min lista. Jag har varit sparsam med styling, då det inte är det viktigaste i sammanhanget. I mitt tidigare repo la jag in en bild, men just nu behöver jag förstå vad det är jag rent praktiskt gör med alla variabler, funktioner och metoder. Jag tycker att alla genomgångar är logiska och jag har lätt för att förstå, men jag har desto svårare för att skriva flytande kod på egen hand, utan att söka upp hur jag ska göra i varje steg.  


## BETYGSKRITERIER inklistrade här för enkel åtkomst
Skapa en webbapplikation för ToDo som innehåller HTML, CSS och JavaScript.

Skriva in en uppgift i ett <input>-fält
Klicka på en knapp för att lägga till uppgiften i en lista som en <li>
Om man klickar på knappen när fältet är tomt ska man få ett meddelande som säger att man måste skriva något.

Klicka på en uppgift <li> i listan för att markera den som klar (sätta class så att den stylas annorlunda)
Uppdatera en liten etikett någonstans med antal uppgifter som man gjort klart.

Uppgifterna som syns i HTML ska även lagras/hanteras i en array med objekt i JavaScript.

Uppgiften ska redovisas som en länk till ett repo på GitHub.

För G ska samtliga ovan punkter uppfyllas med en fungerande webbapplikation.

För VG ska förutom G-kraven följande uppfyllas:
Klicka på en <li> som markerats som färdig igen för att markera den som ofärdig (kräver conditionals)
Klicka på en liten papperskorg på varje rad för att radera den uppgiften ur listan

Webbapplikationen ska publiceras på GitHub pages.


### mina HJÄLP-anteckningar som jag använt mig av:
Just det, jag glömde säga att du kan börja med att hardkoda en uppgift för att testa i din kod /funktion. Till exempel, skapa en uppgift som const task1 = { id: 1, text: 'do something', completed: false };, och försök sedan spara den i arrayen. Använd console.log för att skriva ut arrayen och se om problemet ligger i funktionen eller om det är ett problem med kopplingen mellan DOM och JavaScript

Mina tips för att göra det lättare för dig är att börja med att skapa en array och ett objekt för varje ny uppgift. Dela sedan upp logiken i små funktioner, som till exempel add, delete och toggle, så blir det enklare att testa och justera koden. Ta först en funktion, till exempel add, och fundera på vad som behövs för att lägga till en ny uppgift och spara den i arrayen. Lägg hela fokusen på att den funktionen fungerar till 100% innan du går vidare till nästa. Hemligheten bakom att skriva bra kod  är att bryta ner allt i små delar och använda console.log ofta i början för att se till att allt fungerar innan man går vidare.

Variabler: Behållare för data.
Funktioner: Block av kod som kan köras när som helst.
Loopar och villkor: Hur man upprepar och beslutar saker i koden.
DOM-manipulation: Hur du interagerar med element på en webbsida.

#### SISTA ANTECKNINGAR INNAN INLÄMNING:
Jag har nu knappat klart och lämnar in detta för utvärdering. 
Jag lyckades inte få till en papperskorg med en emoji-kod.
Däremot gjorde jag en delete button, men överstrykningen sträckte sig hela vägen till "X"-knappen där man raderar varje enskild task.
Clear all-knappen blev alldeles för lång, fast den var kort någonstans under processen. 
Jag lyckades heller inte behålla punkterna på min o-ordnade lista, de försvann under vägens gång och jag vet inte hur.

Jag läste i mina anteckningar att vi ska ange constants med STORA BOKSTÄVER, stämmer det?


Jag lägger till lite mer text för att stagea nya förändringar, som jag kan committa och få en ny version att pusha till github. 




