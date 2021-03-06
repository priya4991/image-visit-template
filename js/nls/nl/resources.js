/*global define */
/*
 | Copyright 2018 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  "map": {
    "error": "Kaart kan niet gemaakt worden",
    "licenseError": {
      "message": "Uw account heeft geen licentie om configureerbare apps te gebruiken die niet openbaar zijn. Vraag uw organisatiebeheerder om u een gebruikerstype toe te wijzen dat Essential Apps of een add-on Essential Apps-licentie bevat.",
      "title": "Geen licentie"
    }
  },
  "nav": {
    "close": "Sluiten"
  },
  "basemap": {
    "title": "Basiskaartgalerij"
  },
  "visit": {
    "title": "Bezoek",
    "visit": "Attributen bezoeken",
    "image": "Beeldattributen",
    "addText": "Selecteer een symbool en klik op de kaart.",
    "next": "Volgende",
    "prev": "Vorige",
    "error": "Toegang afgewezen. Lagen kunnen niet bewerkt worden.",
    "edit": "Notities bewerken",
    "save": "Opslaan",
    "filter": "Filteren op bezoekstatus",
    "all": "Alle",
    "record": "Record",
    "of": "van",
    "error1": "Voer een geldige numerieke waarde in.",
    "layer": "Laag wisselen",
    "imageLayer": "Satellietbeelden",
    "visitLayer": "Bezoek",
    "notesLayer": "Opmerkingen",
    "layerError": "Geen lagen aanwezig in de kaart.",
    "follow": "Volgen",
    "okay": "Oké",
    "noStat": "Geen status",
    "left": "Links",
    "up": "Bovenkant",
    "down": "Naar beneden",
    "right": "Rechts",
    "center": "Centreren",
    "press": "Druk op",
    "scan": "Beeld scannen",
    "scale": "Schaal opnieuw instellen",
    "view": "Weergave resetten",
    "search": "Zoeken...",
    "additionalFilter": "Filteren op"
  },
  "measurement": {
    "title": "Beeldmeting",
    "error": "Mensuratiemogelijkheden niet ondersteund."
  },
  "about": {
    "title": "Info"
  },
  "addData": {
    "_widgetLabel": "Gegevens toevoegen",
    "noOptionsConfigured": "Geen opties geconfigureerd.",
    "tabs": {
      "search": "Zoeken",
      "url": "URL",
      "file": "Bestand"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "De laag is niet toegankelijk.",
      "loadError": "AddData, kan niet worden geladen:",
      "searchBox": {
        "search": "Zoeken",
        "placeholder": "Zoeken..."
      },
      "bboxOption": {
        "bbox": "Binnen kaart"
      },
      "scopeOptions": {
        "anonymousContent": "Content",
        "myContent": "Mijn Content",
        "myOrganization": "Mijn organisatie",
        "curated": "Samengesteld",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sorteren op:",
        "relevance": "Relevantie",
        "title": "Titel",
        "owner": "Eigenaar",
        "rating": "Beoordeling",
        "views": "Weergaven",
        "date": "Datum",
        "switchOrder": "Wijzigen"
      },
      "typeOptions": {
        "prompt": "Type",
        "mapService": "Kaartenservice",
        "featureService": "Featureservice",
        "imageService": "Imageservice",
        "vectorTileService": "Vectrotileservice",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Geen resultaten gevonden."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Eerste",
        "previous": "<",
        "previousTip": "Vorige",
        "next": ">",
        "nextTip": "Volgende",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Item",
        "itemPlural": "Items"
      },
      "item": {
        "actions": {
          "add": "Toevoegen",
          "close": "Sluiten",
          "remove": "Verwijderen",
          "details": "Gegevens",
          "done": "Gereed",
          "editName": "Naam bewerken"
        },
        "messages": {
          "adding": "Bezig met toevoegen...",
          "removing": "Bezig met verwijderen",
          "added": "Toegevoegd",
          "addFailed": "Add failed",
          "unsupported": "Niet-ondersteund"
        },
        "typeByOwnerPattern": "{type} by {owner}",
        "dateFormat": "d. MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "Kaartenservice",
          "Feature Service": "Featureservice",
          "Image Service": "Imageservice",
          "Vector Tile Service": "Vectrotileservice",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Type",
      "url": "URL",
      "types": {
        "ArcGIS": "Een ArcGIS Server-webservice",
        "WMS": "Een WMS OGC-webservice",
        "WMTS": "Een WMTS OGC-webservice",
        "WFS": "Een WFS OGC-webservice",
        "KML": "Een KML-bestand",
        "GeoRSS": "Een GeoRSS-bestand",
        "CSV": "Een CSV-bestand"
      },
      "samplesHint": "Voorbeeld URL(s)"
    },
    "addFromFile": {
      "intro": "U kunt de volgende bestandstypen zoeken of plaatsen:",
      "types": {
        "Shapefile": "Een shapefile (.zip, ZIP-archief met alle shapefile-bestanden)",
        "CSV": "Een CSV-bestand (.csv met adres of breedtegraad, lengtegraad en komma, puntkomma of tabscheidingstekens)",
        "KML": "Een KML-bestand (.kml)",
        "GPX": "Een GPX-bestand (.gpx, GPS Exchange Format)",
        "GeoJSON": "Een GeoJSON-bestand (.geo.json of .geojson)"
      },
      "generalizeOn": "Objecten generaliseren voor webweergave",
      "dropOrBrowse": "Zoeken of plaatsen",
      "browse": "Bladeren",
      "invalidType": "Dit bestandstype worden niet ondersteund.",
      "addingPattern": "{filename}: bezig met toevoegen...",
      "addFailedPattern": "{filename}: toevoegen mislukt",
      "featureCountPattern": "{filename}: {count} object(en)",
      "invalidTypePattern": "{filename}: dit type wordt niet ondersteund",
      "maxFeaturesAllowedPattern": "Een maximum van {count} objecten is toegestaan",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Er is een probleem opgetreden.",
      "kmlProjectionMismatch": "De ruimtelijke referentie van de kaart en de KML-laag stemmen niet overeen, en de conversie kan niet worden uitgevoerd op de client."
    },
    "layerList": {
      "caption": "Lagen",
      "noLayersAdded": "Er zijn geen lagen toegevoegd.",
      "removeLayer": "Verwijder laag",
      "back": "Terug"
    }
  }
});