This project is about creating a better hypertext(inter-note links) notebooking system that supports handwriting, formatted text (markdown/LaTeX/tables/calendars), images and files, and external links.

Design Principles:
-No view/edit dichotomy (you are already editing, fast as writing with a pencil. autosaves everything)
-Focused, extensively minimalized interface: focus on the notes, note taking, and navigation first and foremost.
-Navigation and search by Spatial memory is top priority.  
-Prioritize UI functions and minimize menus or lists of buttons.  The user is here to look for information, not for tools and functions.
-Each card is a note: a full thought with links, references, and resources noted, but not too long.


Main features:
-Hyperlinking is the main and most accessable tool for connection.  Ensure many different methods for the user to implement hyperlinking. add links by typing card names or IDs(searchable), or with stylis gestures like line connection drawing->link conversion.  Link to non extant cards possible, with automatic new card generation on link traverse.  Auto backlinking?
-use with a keyboard(html/markdown/LaTeX/tables/tags/calendars/checklists) and a stylis(handwritting/sketching). Everywhere is a text box and a drawing surface.
-multiplexed viewing: view and edit multiple cards at once, including a list of recently accessed notes.
-connectivity viewing: user customizable and relatively static map (doesn't change the location of existing nodes too much when new nodes are added so user can still find old information by spatial memory)
-Full offline functionality.  Built for offline use, with online backup and cross device realtime syncing when connected.
-Full text search (and handwriting eventually by handwriting recognition and maybe some kind of stroke match searching?)


Inspirations include (Knowledge Base Software)
-ZettleKasten notebox system
-Wikipedia/MediWiki (hypertext, quick page generation, templating, version history/change tracking)
-Notion (visual editing WYSIWYG, project management, calendar, alternate viewing modes: tables/calendars/lists/tiles, tagging system)
-Notability (audio + handwriting syncronization)
-OneNote (mixed input methods)
