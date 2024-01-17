import{Component} from 'react';
import check from './check.jpg';
export class GroceryList extends Component{
    state={
        UserInput: '',
        groceryList: []
    }
    onChangeEvent(e){
        this.setState({userInput: e});
    }
    addItem(input) {
        if(input==='') {
            alert("Please, enter an item")
        } 
        
        else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
    }
       
}
    deleteItem() {
        let listArray=this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }
        crossedWord(e) {
            const li=e.target;
            li.classList.toggle('crossed');
        }
        onFormSubmit(e) {
            e.preventDefault();
        }

render(){
    return(
        <div>
        <form onSubmit={this.onFormSubmit}>
        <div className="container">
            <input type="text" 
            placeholder="What do you want to buy today?"
            onChange={(e)=>{this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
        </div>

        <div className="container">
        <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
        </div>
        <ul>
            {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedWord} key ={index}>
                    <img src={check} width="100px"alt="check-box"/>
                    {item}
                    </li>
                ))}
             </ul>
             <div className="container">
             <button onClick={() =>this.deleteItem()} className="btn delete">Delete</button>
             </div>
             </form>
             </div>
        )
    }
}