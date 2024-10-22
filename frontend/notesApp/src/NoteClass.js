import { v4 as uuidv4 } from 'uuid';

class NoteData {
  
  constructor(header = "New Note", content = "Start by writing here", category = "default", isPinned = 0, isArchived = 0, imgUrl = "") {
    this.id = uuidv4();
    this.header = header;
    this.content = content;
    this.category = category;
    this.date = NoteData.createCurrentDate();
    this.isPinned = isPinned;
    this.isArchived = isArchived;
    this.imgUrl = imgUrl;
    this.saved = 0;
    this.modify = 0;
  }

  static createCurrentDate() {
      const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];
      const date = new Date();
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      const formattedDate = `${day} ${month} ${year}`
      return formattedDate;
  }

  updateData(key, value) {
      this.data = {
        ...this.data,
        [key]: value,
      };
    }

  printNoteContent() {
      console.log(`Note has been created with id "${this.id}" note name = ${this.header} - note content = ${this.content} - 
      note category = ${this.category} - note date = ${this.date} - pinned = ${this.isPinned} - archive = ${this.isArchived}`)
  }
}

export default NoteData;