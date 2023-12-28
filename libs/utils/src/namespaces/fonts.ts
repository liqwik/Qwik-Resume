export type Font = {
  family: string;
  category: string;
  subsets: string[];
  variants: string[];
  files: { [key: string]: string };
};

export const fonts: Font[] = [
  {
    family: "Battambang",
    variants: ["100", "300", "regular", "700", "900"],
    subsets: ["khmer", "latin"],
    files: {
      "100": "http://fonts.gstatic.com/s/battambang/v24/uk-kEGe7raEw-HjkzZabNhGp5w50_o9T7Q.ttf",
      "300": "http://fonts.gstatic.com/s/battambang/v24/uk-lEGe7raEw-HjkzZabNtmLxyRa8oZK9I0.ttf",
      regular: "http://fonts.gstatic.com/s/battambang/v24/uk-mEGe7raEw-HjkzZabDnWj4yxx7o8.ttf",
      "700": "http://fonts.gstatic.com/s/battambang/v24/uk-lEGe7raEw-HjkzZabNsmMxyRa8oZK9I0.ttf",
      "900": "http://fonts.gstatic.com/s/battambang/v24/uk-lEGe7raEw-HjkzZabNvGOxyRa8oZK9I0.ttf",
    },
    category: "display",
  },
  {
    family: "Khmer",
    variants: ["regular"],
    subsets: ["khmer"],
    files: {
      regular: "http://fonts.gstatic.com/s/khmer/v29/MjQImit_vPPwpF-BpN2EeYmD.ttf",
    },
    category: "sans-serif",
  },
  {
    family: "Koulen",
    variants: ["regular"],
    subsets: ["khmer", "latin"],
    files: {
      regular: "http://fonts.gstatic.com/s/koulen/v27/AMOQz46as3KIBPeWgnA9kuYMUg.ttf",
    },
    category: "display",
  },
  {
    family: "Moul",
    variants: ["regular"],
    subsets: ["khmer", "latin"],
    files: {
      regular: "http://fonts.gstatic.com/s/moul/v27/nuF2D__FSo_3E-RYiJCy-00.ttf",
    },
    category: "display",
  },
  {
    family: "Nokora",
    variants: ["100", "300", "regular", "700", "900"],
    subsets: ["khmer", "latin"],
    files: {
      "100": "http://fonts.gstatic.com/s/nokora/v31/hYkKPuwgTubzaWxoXzALgPNw8QZN.ttf",
      "300": "http://fonts.gstatic.com/s/nokora/v31/hYkLPuwgTubzaWxolxIrqt18-B9Uuw.ttf",
      regular: "http://fonts.gstatic.com/s/nokora/v31/hYkIPuwgTubzaWxQOzoPovZg8Q.ttf",
      "700": "http://fonts.gstatic.com/s/nokora/v31/hYkLPuwgTubzaWxohxUrqt18-B9Uuw.ttf",
      "900": "http://fonts.gstatic.com/s/nokora/v31/hYkLPuwgTubzaWxovxcrqt18-B9Uuw.ttf",
    },
    category: "sans-serif",
  },
  {
    family: "Siemreap",
    variants: ["regular"],
    subsets: ["khmer"],
    files: {
      regular: "http://fonts.gstatic.com/s/siemreap/v28/Gg82N5oFbgLvHAfNl2YbnA8DLXpe.ttf",
    },
    category: "sans-serif",
  },
  {
    family: "Roboto",
    category: "sans-serif",
    subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"],
    variants: [
      "100",
      "100italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "700",
      "700italic",
      "900",
      "900italic",
    ],
    files: {
      "100": "http://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1MmgWxPKTM1K9nz.ttf",
      "300": "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5vAx05IsDqlA.ttf",
      "500": "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf",
      "700": "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      "900": "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAx05IsDqlA.ttf",
      "100italic": "http://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrIzcXLsnzjYk.ttf",
      "300italic": "http://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TjARc9AMX6lJBP.ttf",
      regular: "http://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
      italic: "http://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf",
      "500italic": "http://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ABc9AMX6lJBP.ttf",
      "700italic": "http://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TzBhc9AMX6lJBP.ttf",
      "900italic": "http://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TLBBc9AMX6lJBP.ttf",
    },
  },
  {
    family: "Open Sans",
    category: "sans-serif",
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "hebrew",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    variants: [
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
    ],
    files: {
      "300":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf",
      "500":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0C4nY1M2xLER.ttf",
      "600":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4nY1M2xLER.ttf",
      "700":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4nY1M2xLER.ttf",
      "800":
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4nY1M2xLER.ttf",
      regular:
        "http://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk5hkaVcUwaERZjA.ttf",
      italic:
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkaVcUwaERZjA.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk_RkaVcUwaERZjA.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjaVcUwaERZjA.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVcUwaERZjA.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/opensans/v36/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk0ZjaVcUwaERZjA.ttf",
    },
  },
  {
    family: "Montserrat",
    category: "sans-serif",
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    variants: [
      "100",
      "200",
      "300",
      "regular",
      "500",
      "600",
      "700",
      "800",
      "900",
      "100italic",
      "200italic",
      "300italic",
      "italic",
      "500italic",
      "600italic",
      "700italic",
      "800italic",
      "900italic",
    ],
    files: {
      "100":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Uw-Y3tcoqK5.ttf",
      "200":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr6Ew-Y3tcoqK5.ttf",
      "300":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-Y3tcoqK5.ttf",
      "500":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf",
      "600":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf",
      "700":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-Y3tcoqK5.ttf",
      "800":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-Y3tcoqK5.ttf",
      "900":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC70w-Y3tcoqK5.ttf",
      regular:
        "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R8aX9-p7K5ILg.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqyR9aX9-p7K5ILg.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq_p9aX9-p7K5ILg.ttf",
      italic:
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R9aX9-p7K5ILg.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq5Z9aX9-p7K5ILg.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq3p6aX9-p7K5ILg.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6aX9-p7K5ILg.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqyR6aX9-p7K5ILg.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqw16aX9-p7K5ILg.ttf",
    },
  },
  {
    family: "Lato",
    category: "sans-serif",
    subsets: ["latin", "latin-ext"],
    variants: [
      "100",
      "100italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "700",
      "700italic",
      "900",
      "900italic",
    ],
    files: {
      "100": "http://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHh30wWyWrFCbw7A.ttf",
      "300": "http://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf",
      "700": "http://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf",
      "900": "http://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh50Xew-FGC_p9dw.ttf",
      "100italic": "http://fonts.gstatic.com/s/lato/v24/S6u-w4BMUTPHjxsIPy-vNiPg7MU0.ttf",
      "300italic": "http://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI9w2PHA3s5dwt7w.ttf",
      regular: "http://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk6XweuBCY.ttf",
      italic: "http://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHjxswWyWrFCbw7A.ttf",
      "700italic": "http://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI5wqPHA3s5dwt7w.ttf",
      "900italic": "http://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI3wiPHA3s5dwt7w.ttf",
    },
  },
  {
    family: "Poppins",
    category: "sans-serif",
    subsets: ["devanagari", "latin", "latin-ext"],
    variants: [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
    files: {
      "100": "http://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTed3FBGPaTSQ.ttf",
      "200": "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_V1tvFP-KUEg.ttf",
      "300": "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf",
      "500": "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf",
      "600": "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
      "700": "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf",
      "800": "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4V1tvFP-KUEg.ttf",
      "900": "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLBT5V1tvFP-KUEg.ttf",
      "100italic": "http://fonts.gstatic.com/s/poppins/v20/pxiAyp8kv8JHgFVrJJLmE3tFOvODSVFF.ttf",
      "200italic": "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmv1plEN2PQEhcqw.ttf",
      "300italic": "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm21llEN2PQEhcqw.ttf",
      regular: "http://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf",
      italic: "http://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLed3FBGPaTSQ.ttf",
      "500italic": "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmg1hlEN2PQEhcqw.ttf",
      "600italic": "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmr19lEN2PQEhcqw.ttf",
      "700italic": "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15lEN2PQEhcqw.ttf",
      "800italic": "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm111lEN2PQEhcqw.ttf",
      "900italic": "http://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm81xlEN2PQEhcqw.ttf",
    },
  },
  {
    family: "Oswald",
    category: "sans-serif",
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    variants: ["200", "300", "regular", "500", "600", "700"],
    files: {
      "200":
        "http://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs13FvgUFoZAaRliE.ttf",
      "300":
        "http://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs169vgUFoZAaRliE.ttf",
      "500":
        "http://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs18NvgUFoZAaRliE.ttf",
      "600":
        "http://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1y9ogUFoZAaRliE.ttf",
      "700":
        "http://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZogUFoZAaRliE.ttf",
      regular:
        "http://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvgUFoZAaRliE.ttf",
    },
  },
  {
    family: "Noto Sans",
    category: "sans-serif",
    subsets: [
      "cyrillic",
      "cyrillic-ext",
      "devanagari",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    variants: [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
    files: {
      "100": "http://fonts.gstatic.com/s/notosans/v30/o-0OIpQlx3QUlC5A4PNjhjRFSfiM7HBj.ttf",
      "200": "http://fonts.gstatic.com/s/notosans/v30/o-0NIpQlx3QUlC5A4PNjKhVlY9aA5Wl6PQ.ttf",
      "300": "http://fonts.gstatic.com/s/notosans/v30/o-0NIpQlx3QUlC5A4PNjThZlY9aA5Wl6PQ.ttf",
      "500": "http://fonts.gstatic.com/s/notosans/v30/o-0NIpQlx3QUlC5A4PNjFhdlY9aA5Wl6PQ.ttf",
      "600": "http://fonts.gstatic.com/s/notosans/v30/o-0NIpQlx3QUlC5A4PNjOhBlY9aA5Wl6PQ.ttf",
      "700": "http://fonts.gstatic.com/s/notosans/v30/o-0NIpQlx3QUlC5A4PNjXhFlY9aA5Wl6PQ.ttf",
      "800": "http://fonts.gstatic.com/s/notosans/v30/o-0NIpQlx3QUlC5A4PNjQhJlY9aA5Wl6PQ.ttf",
      "900": "http://fonts.gstatic.com/s/notosans/v30/o-0NIpQlx3QUlC5A4PNjZhNlY9aA5Wl6PQ.ttf",
      "100italic":
        "http://fonts.gstatic.com/s/notosans/v30/o-0MIpQlx3QUlC5A4PNr4AwhQ_yu6WBjJLE.ttf",
      "200italic":
        "http://fonts.gstatic.com/s/notosans/v30/o-0TIpQlx3QUlC5A4PNr4AyNYtyEx2xqPaif.ttf",
      "300italic":
        "http://fonts.gstatic.com/s/notosans/v30/o-0TIpQlx3QUlC5A4PNr4AzpYdyEx2xqPaif.ttf",
      regular: "http://fonts.gstatic.com/s/notosans/v30/o-0IIpQlx3QUlC5A4PNb4j5Ba_2c7A.ttf",
      italic: "http://fonts.gstatic.com/s/notosans/v30/o-0OIpQlx3QUlC5A4PNr4DRFSfiM7HBj.ttf",
      "500italic":
        "http://fonts.gstatic.com/s/notosans/v30/o-0TIpQlx3QUlC5A4PNr4AyxYNyEx2xqPaif.ttf",
      "600italic":
        "http://fonts.gstatic.com/s/notosans/v30/o-0TIpQlx3QUlC5A4PNr4AydZ9yEx2xqPaif.ttf",
      "700italic":
        "http://fonts.gstatic.com/s/notosans/v30/o-0TIpQlx3QUlC5A4PNr4Az5ZtyEx2xqPaif.ttf",
      "800italic":
        "http://fonts.gstatic.com/s/notosans/v30/o-0TIpQlx3QUlC5A4PNr4AzlZdyEx2xqPaif.ttf",
      "900italic":
        "http://fonts.gstatic.com/s/notosans/v30/o-0TIpQlx3QUlC5A4PNr4AzBZNyEx2xqPaif.ttf",
    },
  },
  {
    family: "Hanuman",
    category: "serif",
    subsets: ["khmer", "latin"],
    variants: ["100", "300", "regular", "700", "900"],
    files: {
      "100": "http://fonts.gstatic.com/s/hanuman/v22/VuJzdNvD15HhpJJBQMLdPKNiaRpFvg.ttf",
      "300": "http://fonts.gstatic.com/s/hanuman/v22/VuJ0dNvD15HhpJJBQAr_HIlMZRNcp0o.ttf",
      "700": "http://fonts.gstatic.com/s/hanuman/v22/VuJ0dNvD15HhpJJBQBr4HIlMZRNcp0o.ttf",
      "900": "http://fonts.gstatic.com/s/hanuman/v22/VuJ0dNvD15HhpJJBQCL6HIlMZRNcp0o.ttf",
      regular: "http://fonts.gstatic.com/s/hanuman/v22/VuJxdNvD15HhpJJBeKbXOIFneRo.ttf",
    },
  },
];

export const getFontUrls = (family: string, variants: string[]): string[] => {
  const font = fonts.find((font) => font.family === family);

  if (!font) return [];

  return Object.entries(font.files)
    .filter(([variant]) => variants.includes(variant))
    .map(([, url]) => url);
};
