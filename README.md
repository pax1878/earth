# Earth
Developer Challenge für tresmo von Pascal Uhe.

Eine kleine Applikation, geschrieben mit Angular, die die Länder der Erde auflistet. 
Die Liste lässt sich sortieren und mit einer Texteingabe filtern.

## Umsetzung
Da es frei gestellt war mit welchem Werkzeug die Anwendung umgesetzt wird, habe ich mich für Angular entschieden.
Der Grund dafür ist, dass ich vor einiger Zeit eine Schulung zum Thema Angular besuchen durfte.
Dieses angeeignete Wissen wollte ich jetzt auf die Probe stellen und eine "sinnvolle" Anwendung damit entwickeln.

Um die Anwendung ansehnlich zu gestalten habe ich mich für das Material-Layout entschieden.
Dies integriert sich hervorragend in Angular, da es die wichtigsten Komponenten bereits liefert.

Für die Mobile-Darstellung, bzw. damit die Anwendung responsive auf das jeweilige Device reagiert,
kommt das Material FlexLayout zum einsatz. Damit werden zwar keine alten Browser (IE < 9)) mehr unterstützt
hat mir aber dafür einiges an CSS-Ärger während der Entwicklung erspart.

Ich habe eine inline-Validierung für das Formular umgesetzt. Die Validierung beim Submit würde auch funktionierne,
wenn zugelassen werden würde, dass der Submit-Button auch bei fehlerhaftem Formular aktiviert bleibt.

Es gibt einige Unit-Tests mit Karma und Jasmine. Toll fand ich die Möglichkeit auch Komponenten im gerenderten Zustand testen zu können. Das war sehr spannend mich da einzuarbeiten und es umzusetzen.

## Herausforderungen
Die eigentliche Herausforderung der Aufgabe war es, dass ich noch nie eine echte Applikation mit Angular
geschrieben habe. Dementsprechend musste ich viel in der Dokumentation nachsehen und einiges auch ausprobieren.

Dieser Mehraufwand - auch mit dem Einlesen in das Material-Framework - hat mir letztendlich aber einiges an Aufwand erspart.
Die geforderten Features (Liste sortieren und filtern) kommen zum Beispiel mit Angular bzw. Material gleich mit.

## Optimierungen
Im ersten Schritt würde ich zur Optimierung der Usability eine Paginierung der Länderliste einbauen. Dabei wäre darauf 
zu achten, dass die Filterung dennoch über alle Daten und nicht nur die gerade zur Anzeige gebrachten funktioniert.

Es fehlt auch noch ein Fehler-Handling das dem User ein Feedback gibt wenn z.B. einer der benutzten Services nicht erreichbar ist oder eine fehlerhafte Antwort zurück gibt.

Je nach weiteren Features würden die existierenden Komponenten noch granularer aufgetelt werden.
Damit kann eine Wiederverwendung sicher gestellt werden.
