var Counter = React.createClass({
	
	getInitialState: function() {
		return {
			counter: 0,
			counterButtonClick: 0,
			doubleClick: 0,
			rightClickButton: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1,
			counterButtonClick: this.state.counterButtonClick + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1,
			counterButtonClick: this.state.counterButtonClick + 1
		});
	},

	incrementButtonClick: function() {
		this.setState({
			counterButtonClick: this.state.counterButtonClick + 1
		});
	},

	incrementDoubleClick: function() {
		this.setState({
			doubleClick: this.state.doubleClick + 1
		});
	},

	componentWillMount: function() {
		console.log('componentWillMount - umożliwia aktualizację stanu komponentu lub wykonania obliczeń na podstawie propsów.');
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.increment}, 'Increment value'),
			React.createElement('button', {onClick: this.decrement}, 'Decrement value'),
			React.createElement('p', {onDoubleClick: this.incrementDoubleClick}, 'Licznik:(p1) ' + this.state.counter),
			React.createElement('p', {}, 'Licznik kliknięc w przyciski: ' + this.state.counterButtonClick),
			React.createElement('p', {}, 'Licznik podwójnych kliknięc w p1: ' + this.state.doubleClick)
		)
	},

	componentDidMount: function() {
		console.log('componentDidMount - pobierz dane z serwera za pomocą AJAX po załadowaniu drzewa DOM');
	},

	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps - aktualizuje stan komponentu po otrzymaniu nowych propsów');
	},

	shouldComponentUpdate: function() {
		console.log('shouldComponentUpdate - porównuje komponent i sprawdza czy ma się wyswietlic ponownie w przypadku wykrycia zmian');
		return true;
	},

	componentWillUpdate: function() {
		console.log('componentWillUpdate - wywołana w celu przygotowania komponentu do wprowadzenia zmian');
	},

	componentDidUpdate: function() {
		console.log('componentDidUpdate - wywołana po przerysowaniu komponentu, umożliwia operacje po załadowaniu drzewa DOM, np. pobranie danych z serwera');
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount - usuwa dodane listenery, anuluje aktywne pobieranie danych z serwera, usuwa elementy z drzewa DOM');
	}


});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
