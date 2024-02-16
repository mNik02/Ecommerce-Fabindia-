import { Link } from "react-router-dom";

export const IMAGES = {
  RIGHT_BG:
    "https://www.fabindia.com/assets/images/Login/login-bg-side-down.png",
  LEFT_BG: "https://www.fabindia.com/assets/images/Login/login-bg-side.png",
  LEFT_FIRST_FIRST:
    "https://apisap.fabindia.com/medias/hp-sec4-4dec23-1.1.jpg?context=bWFzdGVyfHJvb3R8ODQzNDd8aW1hZ2UvanBlZ3xhRFkxTDJnek9TOHhOVFU0TlRFek1URTJOemMzTkM5b2NDMXpaV00wTFRSa1pXTXlNeTB4TGpFdWFuQm58MDQ2OTBiZDdmODRkOTA2Y2YwZGYwZDgxOTU2MjcwMzdkMWRiN2I4NjQyYzc5NDNkNjdmYmYzZTk0NGFiYTUwMg",
  RIGHT_FIRST_SECOND:
    "https://apisap.fabindia.com/medias/hp-sec4-5oct23-2-rep2.jpg?context=bWFzdGVyfGltYWdlc3w4MzgwNnxpbWFnZS9qcGVnfGFEZGtMMmd6Tnk4eE5UZzVPVFUwTURFeU56YzNOQzlvY0MxelpXTTBMVFZ2WTNReU15MHlMWEpsY0RJdWFuQm58Zjg4NjU5MGYzMTk1ZjQ1ZDYwYTkwMTQyMDRkZGIyNzY2NDk1MGQ2ZTEwMTE1YzM2YjRjYmI4ZTBhMWQ3YTM0Ng",
  LEFT_SECOND_FIRST:
    "https://apisap.fabindia.com/medias/hp-clk-2dec23-1-rep2.1.jpg?context=bWFzdGVyfHJvb3R8ODMyMzZ8aW1hZ2UvanBlZ3xhRE5sTDJnMk5TOHhOVFEwTVRBNE5qRTROVFV3TWk5b2NDMWpiR3N0TW1SbFl6SXpMVEV0Y21Wd01pNHhMbXB3Wnd8NDAxZmU3NmYyMjhkMThhOGFlZGQ3Y2JlY2FkMmM1ZjgxMzg4YTBlY2UwODZjMjNmZTFkNjlkZjM5ZTk1YzYwZA",
  RIGHT_SECOND_SECOND:
    "https://apisap.fabindia.com/medias/hp-clk-2dec23-2-rep2.jpg?context=bWFzdGVyfHJvb3R8NzQyNTN8aW1hZ2UvanBlZ3xhRFJtTDJnMk9DOHhOVFEwTVRBNE5qSTFNVEF6T0M5b2NDMWpiR3N0TW1SbFl6SXpMVEl0Y21Wd01pNXFjR2N8OWZmZTRmMDkwNmYwOGUwM2YxMmM5ZWNkNTQyNzQ2OTlmNGJhNTQ1YWRjMDJhMDRiMDIyNmRmMjBlNjAwNjBiNg",
  LEFT_THIRD_FIRST:
    "https://apisap.fabindia.com/medias/hp-hlsec15b-2dec23-1.jpg?context=bWFzdGVyfHJvb3R8MTMwMjkyfGltYWdlL2pwZWd8YUdaaEwyaGpOaTh4TlRRME1UQTRNelk1TlRFek5DOW9jQzFvYkhObFl6RTFZaTB5WkdWak1qTXRNUzVxY0djfGMwYzY4MmVmOWQ1ZThkNTMzNzJkN2RmYzA1ZjAzMWEwY2M1ZGEzNDllZjg2NDFlMjcxYTkwMmE1ODE4NTczYTQ",
  RIGHT_THIRD_SECOND:
    "https://apisap.fabindia.com/medias/hp-hlsec15b-2dec23-2.jpg?context=bWFzdGVyfHJvb3R8OTQyMDh8aW1hZ2UvanBlZ3xhR1U1TDJoak15OHhOVFEwTVRBNE16YzJNRFkzTUM5b2NDMW9iSE5sWXpFMVlpMHlaR1ZqTWpNdE1pNXFjR2N8Mzg0MTYzZGYzZTQ4NmViZjBkYWU1ZjliNGNkNGI5Mjk2YjU2MzE4YTU2ZDU5ZmY4ZTlkNzIzMjUxMGU0M2M2MQ",
  INDIAN_FLAG:
    "https://www.mmppicture.co.in/wp-content/uploads/2021/01/Indian-Flag-PNG-9.png",
  FABINDIA_LOGO:
    "https://apisap.fabindia.com/medias/fabindia-logo.svg?context=bWFzdGVyfGltYWdlc3wxNjk0NHxpbWFnZS9zdmcreG1sfGFEQTFMMmhsTkM4NE9URXdNVE13TmpReU9UYzBMMlpoWW1sdVpHbGhYMnh2WjI4dWMzWm58NDc1NWVjOTE4Y2QyZTA0ZGEzYTI3ZDE5OWY4ZjI1N2Q0ZTI5NjM1ZWIzYzdlMWYxOWJhMDdmZmJjYjY2MDY1OQ",
  PLAYSTORE:
    "https://apisap.fabindia.com/medias/android-logo.svg?context=bWFzdGVyfGltYWdlc3w3NDU0fGltYWdlL3N2Zyt4bWx8YURkbUwyaGtZUzg1TXpBeU16a3hOVGcyT0RRMkwyRnVaSEp2YVdSZmJHOW5ieTV6ZG1jfDA2OTI3YTYyYzk2M2Q2YjgzNzc4MDcxOGEwMGIxOWYzNTBlZTQyNzkwMjM0ZDI4MzUzM2FkN2RhOTE1NTA2YWE",
  APPSTORE:
    "https://apisap.fabindia.com/medias/ios-logo.svg?context=bWFzdGVyfGltYWdlc3wxMDUxOHxpbWFnZS9zdmcreG1sfGFESTJMMmhrWkM4NU16QXlNemt4TmpFNU5qRTBMMmx2YzE5c2IyZHZMbk4yWnd8ODdiYjUzNzliZWY2MjY2MTIxNThkYTUzNDJkN2EyY2YxYjc1ZmIwOTZjZjU4N2ZmYTA5NjgwZjVkNDJkYjdlZA",
  LANDINGPAGE:
    "https://www.fabindia.com/assets/images/Login/login-background.jpg",
  RIGHT_BG_WHITE:
    "https://www.fabindia.com/assets/images/Login/login-bg-side-up-white.png",
  LEFT_BG_WHITE:
    "https://www.fabindia.com/assets/images/Login/login-bg-side-down-white.png",
  BODYCAROUSELBOTTOM_IMG1:
    "https://apisap.fabindia.com/medias/hp-ids-sec11-2aug23.1.jpg?context=bWFzdGVyfHJvb3R8Mjk1NjA5fGltYWdlL2pwZWd8YUdNNUwyaGpaUzg1TXpBME5qSXlNREEyTXpBeUwyaHdMV2xrY3kxelpXTXhNUzB5WVhWbk1qTXVNUzVxY0djfDYxMGYwODU0YjIzNGI3N2E5ZWUyZTc5MDgyODVlMDVjMDAxMTE4YjRmYWM2NjQwM2JmZDc2YWRjYzkwNjdlYTM",
  BODYCAROUSELMID_IMG1:
    "https://apisap.fabindia.com/medias/hp-keybannermen-4dec23-1.jpg?context=bWFzdGVyfHJvb3R8OTA4Mzh8aW1hZ2UvanBlZ3xhRFV6TDJnek5pOHhOVFU0TlRFek1USXpNek14TUM5b2NDMXJaWGxpWVc1dVpYSnRaVzR0TkdSbFl6SXpMVEV1YW5CbnxlY2YyOWJlNTRhNGM5MzkzNzVlNGE4MzM4NmNhOWRlYzAzNmM5YjFkOTE1ZjQ5ZDMyYmFiMWE2OTI4NjU0OTZm",
  BODYCAROUSELMID_IMG2:
    "https://apisap.fabindia.com/medias/hp-keybannermen-4dec23-2.jpg?context=bWFzdGVyfHJvb3R8MTY2OTExfGltYWdlL2pwZWd8YURrMkwyZ3laaTh4TlRVNE5URXpNVFF5T1RreE9DOW9jQzFyWlhsaVlXNXVaWEp0Wlc0dE5HUmxZekl6TFRJdWFuQm58MDdlMjUxMzI2NmQxNzk4NjVlMzVkYWIxOTJkNTM1YmY2OTVlYzI4M2Q4ZTNiMGU3MThhNDAwYmI3ZGRlMmFhYw",
  BODYCAROUSELTOP_IMG1:
    "https://apisap.fabindia.com/medias/hp-sec1-15dec23-1.jpg?context=bWFzdGVyfGltYWdlc3wyMjk3Nzd8aW1hZ2UvanBlZ3xhR1JsTDJnNU5pOHhOak00TmpJeE1EUTJNemMzTkM5b2NDMXpaV014TFRFMVpHVmpNak10TVM1cWNHY3w2M2M1ODY1NDI3ZWM0YzQ1OGRjMzUyM2VjZTA4NzhhNTJiM2QyOGQyZTdiYjY1ZjI4MDRlNDg2ODRkZDZiMTVm",
  BODYCAROUSELTOP_IMG2:
    "https://apisap.fabindia.com/medias/hp-sec1-15dec23-2.jpg?context=bWFzdGVyfGltYWdlc3wyMDU3ODR8aW1hZ2UvanBlZ3xhR0ZsTDJnNVpDOHhOak00TmpJeE1EWTJNRE00TWk5b2NDMXpaV014TFRFMVpHVmpNak10TWk1cWNHY3wyMTZhZmJjMjczNjYxZGNiOGRjY2Y1NWRiZWQ2YWU1M2Y0ZjEzZTQ0NDdjMmFhNmI3OWI4NjA3NTE3Y2FhOTQ4",
  BODYCAROUSELTOP_IMG3:
    "https://apisap.fabindia.com/medias/hp-sec1-23nov23-3-rep.jpg?context=bWFzdGVyfGltYWdlc3wyODg0ODR8aW1hZ2UvanBlZ3xhRFppTDJoaE5DOHhOak00TmpJeE1EZzFOams1TUM5b2NDMXpaV014TFRJemJtOTJNak10TXkxeVpYQXVhbkJufGM0YzQ5MjM1ZDYwNGMwMjNiYmEyNmU0MmE2NzZhN2YyZjJhNGMxY2FlNGUzNjczM2RjNTE1NjE3ZmE3ZjA0ZTI",
  BODYCAROUSELTOP_IMG4:
    "https://apisap.fabindia.com/medias/hp-sec1-15dec23-4.jpg?context=bWFzdGVyfGltYWdlc3wxNDc4NzV8aW1hZ2UvanBlZ3xhR1UzTDJobU1pOHhOak00TmpJeE1UQTFNelU1T0M5b2NDMXpaV014TFRFMVpHVmpNak10TkM1cWNHY3w1OGYxMTRjYWQ0ZmJhMTJjYThiOTIwODUwYjNjZDdkNTY1Y2U3NWNhNzU2ODQ4YjVmODA5ZmYxOGFiZGI4NDk2",
  BODYCAROUSELTOP_IMG5:
    "https://apisap.fabindia.com/medias/hp-sec1-15dec23-5.jpg?context=bWFzdGVyfGltYWdlc3wyNTg1NzN8aW1hZ2UvanBlZ3xhR0k0TDJobU9TOHhOak00TmpJeE1USTFNREl3Tmk5b2NDMXpaV014TFRFMVpHVmpNak10TlM1cWNHY3xkODU4OWFhNDgyYzA1YTBhZTdkNjM5ZmI1MGM4ZDJhZjhhYmRkOTJlNzY2Yzg1YTM4ZTM1YjAwZjFmZmZhOGNh",
  BODYCAROUSELTOP_IMG6:
    "https://apisap.fabindia.com/medias/hp-sec1-8dec23-6.jpg?context=bWFzdGVyfGltYWdlc3wyNzE5NTF8aW1hZ2UvanBlZ3xhREl5TDJnME15OHhOVGc1T1RVME1UWXdNak16TkM5b2NDMXpaV014TFRoa1pXTXlNeTAyTG1wd1p3fDQ4YTE4ZGU0MjFiMDEyODdiYmNiNWU4Y2ZhYTQwYjJkOGJiM2Y1ODNmNWQwZWJlZDhkYzhjNDFlNjkwZTJhNTg",
  BODYCAROUSELTOP_IMG7:
    "https://apisap.fabindia.com/medias/hp-sec1-24nov23-8.jpg?context=bWFzdGVyfHJvb3R8MjE4MTMzfGltYWdlL2pwZWd8YUdKaUwyZ3pNQzh4TkRrNU56Y3pOalE0T0RrNU1DOW9jQzF6WldNeExUSTBibTkyTWpNdE9DNXFjR2N8ZmIxMGNlYmQ3ZTZkMzcyY2E4ZDRmNDk5YmMzYWQ4ZTE3NjkwYjE0YTc3YmM3NzY3NDMyZDJkYzBhNWIwY2FkOA",
  KIDSCARDS_IMG1:
    "https://apisap.fabindia.com/medias/hp-nik-usd-1nov23-4.jpg?context=bWFzdGVyfHJvb3R8MzMyMzd8aW1hZ2UvanBlZ3xhR0ptTDJnMVpTOHhOREV6TVRVeE1qQXhOamt5Tmk5b2NDMXVhV3N0ZFhOa0xURnViM1l5TXkwMExtcHdad3xmYzIzNDY2ZGYyMDZlNGFkNzM0OGIzOGFjMjAwZjdjYzk1M2ExMzUzZTkwN2JmZmZjM2I1ZjIxMzRkNTMyYmE2",
  KIDSCARDS_IMG2:
    "https://apisap.fabindia.com/medias/hp-nik-usd-1nov23-2.jpg?context=bWFzdGVyfHJvb3R8Mjg1Njh8aW1hZ2UvanBlZ3xhRGM1TDJoaFl5OHhOREV6TVRVeE1UZzROVGcxTkM5b2NDMXVhV3N0ZFhOa0xURnViM1l5TXkweUxtcHdad3w4ZDYxYzRkZGY4MGMyMDRmOGY0NGIxZjE2MjZlYWU1NmVkMjM5YTlkMzQxYzJlNTVmZmU2ZTJjZjg1YWE0NGUw",
  KIDSCARDS_IMG3:
    "https://apisap.fabindia.com/medias/hp-nik-usd-1nov23-3.jpg?context=bWFzdGVyfHJvb3R8MzE1NTJ8aW1hZ2UvanBlZ3xhRFk0TDJoaE9TOHhOREV6TVRVeE1UazFNVE01TUM5b2NDMXVhV3N0ZFhOa0xURnViM1l5TXkwekxtcHdad3w2MzEzMzY5ZDhjYTUzZjI0MDQ2YWRlMTVjOTZjNmFjMTRlZjZiMjMwNzgwNjhhYjgwYzc4MDE3MTZmZmMzNTcx",
  KIDSCARDS_IMG4:
    "https://apisap.fabindia.com/medias/hp-nik-usd-1nov23-1.jpg?context=bWFzdGVyfHJvb3R8Mjc4Mjd8aW1hZ2UvanBlZ3xhREkzTDJoaFpDOHhOREV6TVRVeE1UZ3lNRE14T0M5b2NDMXVhV3N0ZFhOa0xURnViM1l5TXkweExtcHdad3wyZGJjMjU5ODgwN2MwYzdhY2NiNDI0Zjk0ZmQ3ZGNjM2VjYWUwN2ZjNWM2ZGYxNGVjZjEyNWY2MWIwYjk5ZmI1",
  KIDSCARDS_IMG5:
    "https://apisap.fabindia.com/medias/hp-nik-usd-1nov23-4.jpg?context=bWFzdGVyfHJvb3R8MzMyMzd8aW1hZ2UvanBlZ3xhR0ptTDJnMVpTOHhOREV6TVRVeE1qQXhOamt5Tmk5b2NDMXVhV3N0ZFhOa0xURnViM1l5TXkwMExtcHdad3xmYzIzNDY2ZGYyMDZlNGFkNzM0OGIzOGFjMjAwZjdjYzk1M2ExMzUzZTkwN2JmZmZjM2I1ZjIxMzRkNTMyYmE2",
  KIDSCARDS_IMG6:
    "https://apisap.fabindia.com/medias/hp-nik-usd-1nov23-2.jpg?context=bWFzdGVyfHJvb3R8Mjg1Njh8aW1hZ2UvanBlZ3xhRGM1TDJoaFl5OHhOREV6TVRVeE1UZzROVGcxTkM5b2NDMXVhV3N0ZFhOa0xURnViM1l5TXkweUxtcHdad3w4ZDYxYzRkZGY4MGMyMDRmOGY0NGIxZjE2MjZlYWU1NmVkMjM5YTlkMzQxYzJlNTVmZmU2ZTJjZjg1YWE0NGUw",
  MENSCARDS_IMG1:
    "https://apisap.fabindia.com/medias/hp-nim-usd-1nov23-1.jpg?context=bWFzdGVyfHJvb3R8NDY1MDF8aW1hZ2UvanBlZ3xhR00yTDJobE5TOHhOREV6TVRVeE1EY3pPRGszTkM5b2NDMXVhVzB0ZFhOa0xURnViM1l5TXkweExtcHdad3wzZjgxZjVjMDI5MGY3MmQ5M2ViODcxNjA5ZDU1YTJiODcxODI2NDVkZmE3ZTZmMDBmN2Q5N2U0NDkwZjBkOTVl",
  MENSCARDS_IMG2:
    "https://apisap.fabindia.com/medias/hp-nim-usd-2dec23-2.1.jpg?context=bWFzdGVyfHJvb3R8NDI0MzV8aW1hZ2UvanBlZ3xhRFkwTDJnd01pOHhOVFEwTVRBNE5UTTVPVEEzTUM5b2NDMXVhVzB0ZFhOa0xUSmtaV015TXkweUxqRXVhbkJufDFmNjhmYzY4MjdkN2ZhZjk5OGU1NmZkY2RhNGZhOWI3MDFhNDA1NWQzMDY3ZDczZDhiYzQ5NGZmZDgxYzg0ODU",
  MENSCARDS_IMG3:
    "https://apisap.fabindia.com/medias/hp-nim-usd-2dec23-3.jpg?context=bWFzdGVyfHJvb3R8NTAyMDR8aW1hZ2UvanBlZ3xhR05pTDJoalpDOHhOVFEwTVRBNE16UTVPRFV5Tmk5b2NDMXVhVzB0ZFhOa0xUSmtaV015TXkwekxtcHdad3wzMmM1YjUyYThjZDE0YzNlMTA3NDhkZWI1ZjVlYjI5MTdiYzg3Y2VkNTI4YWU2NTI2OGMxY2RkOTJmOTI0N2M0",
  MENSCARDS_IMG4:
    "https://apisap.fabindia.com/medias/hp-nim-usd-1nov23-4.jpg?context=bWFzdGVyfHJvb3R8MzAyNzh8aW1hZ2UvanBlZ3xhRGsyTDJobFl5OHhOREV6TVRVeE1Ea3pOVFU0TWk5b2NDMXVhVzB0ZFhOa0xURnViM1l5TXkwMExtcHdad3xhMTczZGJkMTJiYTUzOWExMzA1NTgxOTU2YTMxMGE5Y2E4ODUwNWQzZTdlZTZjODYxNDIyMzMyN2ZiZmZjZTAz",
  MENSCARDS_IMG5:
    "https://apisap.fabindia.com/medias/hp-nim-usd-1nov23-5.jpg?context=bWFzdGVyfHJvb3R8NDEzNzJ8aW1hZ2UvanBlZ3xhR0ZqTDJoak9DOHhOREV6TVRVeE1UQXdNVEV4T0M5b2NDMXVhVzB0ZFhOa0xURnViM1l5TXkwMUxtcHdad3w4NzgzYjZiZTA2ZTZkNWU3MjlkYmU5NzgzY2Y3YTZhNjk5OTAzZTI0ZDU4Yjk0YjUyNGEwM2I3YzU1YjZmY2Uw",
  WOMENSCARDS_IMG1:
    "https://apisap.fabindia.com/medias/hp-niw-2dec23-3.jpg?context=bWFzdGVyfHJvb3R8NDkwOTZ8aW1hZ2UvanBlZ3xhREE0TDJoa09TOHhOVFEwTVRBNE16RXdOVE14TUM5b2NDMXVhWGN0TW1SbFl6SXpMVE11YW5CbnwzZjAxNDk5M2VkODdmZTNjN2E4YjY2MzRkZTkzMjExMTczNWRlNmI2Y2FiYzMzMjU0MjQwMTBkNzJjODUwZTM1",
  WOMENSCARDS_IMG2:
    "https://apisap.fabindia.com/medias/hp-niw-2dec23-4.jpg?context=bWFzdGVyfHJvb3R8NTI2OTN8aW1hZ2UvanBlZ3xhRFEzTDJoa09DOHhOVFEwTVRBNE16RTNNRGcwTmk5b2NDMXVhWGN0TW1SbFl6SXpMVFF1YW5CbnxhNDAxMTNiNmM3NjNjODc4NTFiMmZlZTkzNTk2Njk2MWRlNDIxMmNjOGJjZjQyOTA1ZmE1MTg4ZDAwMjcxNGMw",
  WOMENSCARDS_IMG3:
    "https://apisap.fabindia.com/medias/hp-niw-30oct23-5.jpg?context=bWFzdGVyfHJvb3R8NDM1ODJ8aW1hZ2UvanBlZ3xhR013TDJnd09TOHhOREF4TkRJd01EZ3dOelExTkM5b2NDMXVhWGN0TXpCdlkzUXlNeTAxTG1wd1p3fDA3YjI3ZGRiODc2MDUyNGQ0YTg1YzM3MjM5YzUwNWUzMWVjYTg2YzY0ODZlOGVlNGQyNWMxMDM1NTRhNTExOWE",
  WOMENSCARDS_IMG4:
    "https://apisap.fabindia.com/medias/hp-niw-30oct23-6.jpg?context=bWFzdGVyfHJvb3R8MzYxMjl8aW1hZ2UvanBlZ3xhR1ptTDJnd09DOHhOREF4TkRJd01EZzNNams1TUM5b2NDMXVhWGN0TXpCdlkzUXlNeTAyTG1wd1p3fDg3OTJkNWJmODkzZWFiNDZhNzlhOGI1MTAwNTFiOGNlNWQwNDM3MWEzMjMzYmZlODIwNTc0NzE5YjJiNzRjOGM",
  WOMENSCARDS_IMG5:
    "https://apisap.fabindia.com/medias/hp-niw-30oct23-7.jpg?context=bWFzdGVyfHJvb3R8NTMwMzh8aW1hZ2UvanBlZ3xhREF4TDJnd05pOHhOREF4TkRJd01Ea3pPRFV5Tmk5b2NDMXVhWGN0TXpCdlkzUXlNeTAzTG1wd1p3fGVlNzNjNzk0OTY4YjBmMWJlNmI0MTU2ZjNjMTAxMTIwMGM3MWUxYjQzNzU3YmY5YjUyNTJjNzM4MDRlNzVkMTE",
  WOMENSCARDS_IMG6:
    "https://apisap.fabindia.com/medias/hp-niw-30oct23-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NDk3NjR8aW1hZ2UvanBlZ3xhREl5TDJoaE5TOHhORFEwTkRnM01URTFOVGMwTWk5b2NDMXVhWGN0TXpCdlkzUXlNeTB4TFhKbGNERXVhbkJufGJiMDJkZWUzNTIxYjYxYjc5MTA3M2Q2YjYxOTZkNWUzNWZiOWNmNmIwZTVkMTc3MjQyZWRiMGExYjAwOTI3N2I",
  WOMENSCARDS_IMG7:
    "https://apisap.fabindia.com/medias/hp-niw-2dec23-2.jpg?context=bWFzdGVyfHJvb3R8NTM4MDN8aW1hZ2UvanBlZ3xhREZoTDJoa1l5OHhOVFEwTVRBNE16QXpPVGMzTkM5b2NDMXVhWGN0TW1SbFl6SXpMVEl1YW5CbnwzOTNlOWU5YmNkMjEzYThjZTY2Y2RhMzQ2ZTBkMzRlNjE0MjJiNmI4Y2ZmYTA4ZjZjOTNmNzY2MGM0NjU0MTg2",
  WOMENSCARDS_IMG8:
    "https://apisap.fabindia.com/medias/hp-niw-2dec23-3.jpg?context=bWFzdGVyfHJvb3R8NDkwOTZ8aW1hZ2UvanBlZ3xhREE0TDJoa09TOHhOVFEwTVRBNE16RXdOVE14TUM5b2NDMXVhWGN0TW1SbFl6SXpMVE11YW5CbnwzZjAxNDk5M2VkODdmZTNjN2E4YjY2MzRkZTkzMjExMTczNWRlNmI2Y2FiYzMzMjU0MjQwMTBkNzJjODUwZTM1",
  WOMENSCARDS_IMG9:
    "https://apisap.fabindia.com/medias/hp-niw-2dec23-4.jpg?context=bWFzdGVyfHJvb3R8NTI2OTN8aW1hZ2UvanBlZ3xhRFEzTDJoa09DOHhOVFEwTVRBNE16RTNNRGcwTmk5b2NDMXVhWGN0TW1SbFl6SXpMVFF1YW5CbnxhNDAxMTNiNmM3NjNjODc4NTFiMmZlZTkzNTk2Njk2MWRlNDIxMmNjOGJjZjQyOTA1ZmE1MTg4ZDAwMjcxNGMw",

  HOMEDECORCARDS_IMG1:
    "https://apisap.fabindia.com/medias/hp-nih-usd-1nov23-1.jpg?context=bWFzdGVyfHJvb3R8NDYxOTF8aW1hZ2UvanBlZ3xhR0ZoTDJnd1pTOHhOREV6TVRVeE16RXpNVEF6T0M5b2NDMXVhV2d0ZFhOa0xURnViM1l5TXkweExtcHdad3wwYjNiNzViMzAxNWRlNDg1OTc0NzExY2EzNzFjZDIzM2U1NDUzMDdhMTBkZDBlNjhhOTEyYjYzOWE4MTAzMzVk",
  HOMEDECORCARDS_IMG2:
    "https://apisap.fabindia.com/medias/hp-nih-usd-1nov23-2.jpg?context=bWFzdGVyfHJvb3R8NDc5Nzh8aW1hZ2UvanBlZ3xhRFU0TDJnd1ppOHhOREV6TVRVeE16RTVOalUzTkM5b2NDMXVhV2d0ZFhOa0xURnViM1l5TXkweUxtcHdad3xhODdkODBhZWRhYmE3MmViMTNmY2VlYWRkYmZiYzI3ZmY3MWJjZWVhODFmOTJmNDZhY2JiM2I1ODhiMDhjNGM1",
  HOMEDECORCARDS_IMG3:
    "https://apisap.fabindia.com/medias/hp-nih-usd-1nov23-3.jpg?context=bWFzdGVyfHJvb3R8NjQzMTZ8aW1hZ2UvanBlZ3xhRFk1TDJneE1pOHhOREV6TVRVeE16STJNakV4TUM5b2NDMXVhV2d0ZFhOa0xURnViM1l5TXkwekxtcHdad3xhZDQ0NDk0ODkyNmYzZDc4N2JhNzY4MmJlZTQzYmViMGZjMjVjMWYzNTVhMzIwMjUwY2RmNTE2NTE4Mzk5OWI0",
  HOMEDECORCARDS_IMG4:
    "https://apisap.fabindia.com/medias/hp-nih-usd-1nov23-3.jpg?context=bWFzdGVyfHJvb3R8NjQzMTZ8aW1hZ2UvanBlZ3xhRFk1TDJneE1pOHhOREV6TVRVeE16STJNakV4TUM5b2NDMXVhV2d0ZFhOa0xURnViM1l5TXkwekxtcHdad3xhZDQ0NDk0ODkyNmYzZDc4N2JhNzY4MmJlZTQzYmViMGZjMjVjMWYzNTVhMzIwMjUwY2RmNTE2NTE4Mzk5OWI0",
  HOMEDECORCARDS_IMG5:
    "https://apisap.fabindia.com/medias/hp-nih-usd-1nov23-4.jpg?context=bWFzdGVyfHJvb3R8MzQ2MTV8aW1hZ2UvanBlZ3xhRFkzTDJneE5TOHhOREV6TVRVeE16TXlOelkwTmk5b2NDMXVhV2d0ZFhOa0xURnViM1l5TXkwMExtcHdad3xmYjEwMTc3MzQzMzIwMWZlMjljMTI5NDRhMjFmNGE0MjQzYjAzOTFiNzVmMmI5N2VhOWNiYTVlOTA5ZjNkZGNk",
  HOMEDECORCARDS_IMG6:
    "https://apisap.fabindia.com/medias/hp-nih-usd-1nov23-5.jpg?context=bWFzdGVyfHJvb3R8NTYwMzZ8aW1hZ2UvanBlZ3xhREk1TDJneE5pOHhOREV6TVRVeE16TTVNekU0TWk5b2NDMXVhV2d0ZFhOa0xURnViM1l5TXkwMUxtcHdad3w5YWNjY2ZlZWQ0OTI5ZGJmNDFmMzZjY2VkYWY3NGYyMWE1NDlhMWQzMjY5MmVmZjQ0NTE5MThjMjA0MDNlNDYx",
};

export const TEXTS = {
  NOT_USER: "Not a Registered User?",
  EXISTING_USER: "Existing User ?",
  SUBMIT_SIGNUP: "Sign Up",
  LOGIN_FORM: "Login",
  REGISTER_FORM: "Register",
  SUBMIT_LOGIN: "Log In",
  SUBMIT_REGISTER: "Register",
  SEND_OTP: "Send OTP",
  FORGOT: "Forgot Password?",
  WELCOME: "Welcome to FabIndia !",
  PLAYSTORE: "https://bit.ly/3Nyti7U",
  APPSTORE: "https://apple.co/3PfBcEk",
  MARQUE:
    "!Beware of imposter sites! Genuine Fabindia products are available only on fabindia.com | Official App - Play Store:",
};

export const FooterData = [
  {
    heading: "LET US HELP YOU",
    subParts: [
      "Order Tracking",
      "Bulk Orders",
      "Store Locator",
      "Furniture Warranty Policy",
    ],
  },
  {
    heading: "SUPPORT",
    subParts: [
     <Link to={"/customerservice"}> Customer Service</Link>,
      "How To Order",
      "Billing & Payments",
      "Shipping & Delivery",
      "Return & Exchanges",
      "FAQs",
    ],
  },
  {
    heading: "COMPANY",
    subParts: [
      "Investor Relations",
      "Contact Us",
      "Careers",
      "Privacy Policy",
      "Terms Of Use",
      "Interior Design Studio",
      "Franchise Enquiry Form",
    ],
  },
  {
    heading: "ABOUT FABINDIA",
    subParts: [
      "60 years of Fabindia",
      "Philosophy",
      "Organic Certification",
      "The Fabindia School",
      "About Us",
      "Fabfamily",
    ],
  },
];

export const ServiceIcon=[
  {
    icon:<i class="fa fa-envelope-o" aria-hidden="true"></i>,
    title: "Customer Support",
    description:"Got a question or a comment? Write to us.",
  },
  {
    icon:<i class="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "How To Order",
    description:"Ordering from www.fabindia.com, a step-by-step guide",
  },
  {
    icon:<i class="fa fa-credit-card-alt" aria-hidden="true"></i>,
    title:"Billing And Payments",
    description:"Got a question or a comment? Write to us.",
  },
  {
    icon:<i class="fa fa-truck" aria-hidden="true"></i>,
    title:"Shipping & Delivery",
    description:"Domestic & International shipping. Delivery methods, times and costs.",
  },
  {
icon:<i class="fa fa-pencil-square-o" aria-hidden="true"></i>,
title:"Track Your Order",
description:"Your order status with us and tracking your shipment.",
  },
  {
    icon:<i class="fa fa-retweet" aria-hidden="true"></i>,
    title:"REturn & Exchanges",
    description:"Returning goods, exchanging them, or claiming a refund.",
  },
  {
    icon:<i class="fa fa-question" aria-hidden="true"></i>,
    title:"FAQ'S",
    description:"Questions frequently asked by our customers.",
  },
  {
    icon:<i class="fa fa-hand-peace-o" aria-hidden="true"></i>,
    title:"Fabric Care",
    description:"Caring for your handmade Fabindia product.",
  }
]