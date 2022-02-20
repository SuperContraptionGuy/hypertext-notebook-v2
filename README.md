# Hypertext Notebooking System

This project is about creating a better **hypertext**(inter-note links) notebooking system that supports **handwriting**, formatted text (markdown/LaTeX/tables/calendars), images and files, and external links.

## Design Principles:
- No view/edit dichotomy
- Zero barriers to thinking. **Speed of thought** navigation, writing, and linking.  you are already editing, fast as writing with a pencil. autosaves everything
- **Focused**, extensively minimalized interface: focus on the notes, note taking, and navigation, and link creating first and foremost. minimize how much the tool iteself distracts you from reading and writing.
- Navigation by **Spatial memory** is top priority, with search and tagging close second. (persistant maps(memorizable), visual card previews on hovers, navigation histories, always visible visual signposts(ie breadcrumbs or minimap) (creat links by searching for card titles, list tagged cards)
- Prioritize UI functions and minimize menus or lists of buttons.  The user is here to look for information, not for tools and functions.
- Each card is a note: a **complete thoughts** with links, references, and resources noted, but not too long ie avoid scrolling to view card contents if at all possible.


## Main features:
- Hyperlinking is the main and most accessable tool for connection.  Ensure many different methods for the user to implement hyperlinking. add links by typing card names or IDs(searchable), or with stylis gestures like line connection drawing->link conversion.  Link to non extant cards possible, with automatic new card generation on link traverse.  Auto backlinking?
- use with a keyboard(html/markdown/LaTeX/tables/tags/calendars/checklists) and a stylis(handwritting/sketching). Everywhere is a text box and a drawing surface.
- multiplexed viewing: view and edit multiple cards at once, including a list of recently accessed notes.
- connectivity viewing: user customizable and relatively static map (doesn't change the location of existing nodes too much when new nodes are added so user can still find old information by spatial memory)
- Full **offline** functionality.  Built for offline use, with online backup and cross device realtime syncing when connected.
- Full text search (and handwriting eventually by handwriting recognition and maybe some kind of stroke match searching?)

![Whiteboarding session](https://raw.githubusercontent.com/SuperContraptionGuy/hypertext-notebook-v2/main/UI%20and%20SQLite%20tables%20WhiteboardSession.jpg)

## Inspirations include (Knowledge Base Software, mindmapping, notetaking, web-browsing)
- ZettleKasten note-box system (hypertext references, sorted(predictable) card locations)
- Wikipedia/MediWiki (hypertext linking, quick page generation, templating, version history/change tracking)
- Notion (visual editing WYSIWYG, project management, calendar, alternate viewing modes: tables/calendars/lists/tiles, tagging system, hypertext referencing)
- Notability (audio + handwriting syncronization (animations, note based audio scrubbing), efficient file generation/exporting)
- OneNote (mixed input methods)
- Web-browsers (tab based browsing contexts)
- Window managers (potential for window tiling, parallel information access)
