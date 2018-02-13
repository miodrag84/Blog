
import React from 'react';

export default class BlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      
      error: ''
    };
  }
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
      };
    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.description ) {
          this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
            description: this.state.description,
            
            note: this.state.note
          });
        }
      };

    render() {
        return (

<div className="content-container">
{this.state.error && <p>{this.state.error}</p>}
<form className="form" onSubmit={this.onSubmit}>
<input className="text-input"
type="text"
value={this.state.description} 
onChange={this.onDescriptionChange}
placeholder="Add Title"
/>
<textarea className="textarea"
placeholder="Post body"
value={this.state.note}
onChange={this.onNoteChange}
>
</textarea>
<button className="button">Save post</button>
</form>
</div>

        )}}