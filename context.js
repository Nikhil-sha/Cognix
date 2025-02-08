import React, { createContext, Component } from 'react';

export const AppContext = createContext();

export class AppProvider extends Component {
	state = {
		db: null,
		allNotes: null,
		activePad: null,
	};

	setDB = (db) => {
		this.setState({ db: db });
	};

	setAllNotes = (notes) => {
		this.setState({ allNotes: notes });
	};

	setActivePad = (pad) => {
		this.setState({ activePad: pad });
	};

	// Open IndexedDB
	openDB = (dbName, version) => {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(dbName, version);
			request.onsuccess = () => resolve(request.result);
			request.onerror = (e) => reject(`Database error: ${e.target.errorCode}`);
			request.onupgradeneeded = (e) => {
				const db = e.target.result;
				if (!db.objectStoreNames.contains('notes')) {
					db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
				}
			};
		});
	};

	// Add a new note
	addNote = (name, snippet, content) => {
		if (!name || name === "") {
			return;
		}

		if (!snippet || snippet === "") {
			return;
		}

		if (!content || content === "") {
			return;
		}

		const { db } = this.state;
		if (!db) return Promise.reject('Database not initialized');
		const note = { name, snippet, content, createdAt: new Date(), updatedAt: new Date() };
		return new Promise((resolve, reject) => {
			const transaction = db.transaction('notes', 'readwrite');
			const store = transaction.objectStore('notes');
			const request = store.add(note);
			request.onsuccess = () => {
				// After adding, fetch all notes to update the state
				this.getAllNotes().then((notes) => {
					this.setState({ allNotes: notes });
				});
				resolve(note);
			};
			request.onerror = (e) => reject(`Error adding note: ${e.target.error}`);
		});
	};

	// Get a single note
	getNote = (id) => {
		if (!id) {
			return Promise.reject('Invalid note ID');
		}

		const { db } = this.state;
		if (!db) {
			return Promise.reject('Database not initialized');
		}

		return new Promise((resolve, reject) => {
			const transaction = db.transaction('notes', 'readonly');
			const store = transaction.objectStore('notes');
			const request = store.get(id);

			request.onsuccess = () => {
				if (request.result) {
					resolve(request.result);
				} else {
					reject(`Note with ID ${id} not found`);
				}
			};

			request.onerror = (e) => reject(`Error getting note: ${e.target.error}`);
		});
	};

	// Update a note
	updateNote = (id, updatedData) => {
		if (id === '' || updatedData === null) {
			return;
		}
		const { db } = this.state;
		if (!db) return Promise.reject('Database not initialized');
		return this.getNote(id).then((existingNote) => {
			if (!existingNote) return Promise.reject('Note not found');
			const updatedNote = { ...existingNote, ...updatedData, updatedAt: new Date() };
			return new Promise((resolve, reject) => {
				const transaction = db.transaction('notes', 'readwrite');
				const store = transaction.objectStore('notes');
				const request = store.put(updatedNote);
				request.onsuccess = () => {
					// After updating, fetch all notes to update the state
					this.getAllNotes().then((notes) => {
						this.setState({ allNotes: notes });
					});
					resolve(updatedNote);
				};
				request.onerror = (e) => reject(`Error updating note: ${e.target.error}`);
			});
		});
	};

	// Delete a note
	deleteNote = (id) => {
		if (!id || id === '') {
			return;
		}

		const { db } = this.state;
		if (!db) return Promise.reject('Database not initialized');
		return new Promise((resolve, reject) => {
			const transaction = db.transaction('notes', 'readwrite');
			const store = transaction.objectStore('notes');
			const request = store.delete(id);
			request.onsuccess = () => {
				// After deleting, fetch all notes to update the state
				this.getAllNotes().then((notes) => {
					this.setState({ allNotes: notes });
				});
				resolve(id);
			};
			request.onerror = (e) => reject(`Error deleting note: ${e.target.error}`);
		});
	};

	// Get all notes
	getAllNotes = () => {
		const { db } = this.state;
		if (!db) return Promise.reject('Database not initialized');
		return new Promise((resolve, reject) => {
			const transaction = db.transaction('notes', 'readonly');
			const store = transaction.objectStore('notes');
			const request = store.getAll();
			request.onsuccess = () => resolve(request.result.reverse());
			request.onerror = (e) => reject(`Error fetching all notes: ${e.target.error}`);
		});
	};

	render() {
		return (
			<AppContext.Provider
				value={{
					...this.state,
					openDB: this.openDB,
					setDB: this.setDB,
					addNote: this.addNote,
					getNote: this.getNote,
					printPad: this.printPad,
					deleteNote: this.deleteNote,
					updateNote: this.updateNote,
					getAllNotes: this.getAllNotes,
					setAllNotes: this.setAllNotes,
					setActivePad: this.setActivePad,
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}