import View from './View';
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');

  _errorMessage = 'No recipe was added to your bookmarks';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler)
  }
  _generateMarkUp() {
    // console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new BookmarksView();
