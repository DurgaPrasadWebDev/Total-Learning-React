import React, { Component } from 'react'
import uuid from 'uuid';
export default class CreateTestSeriesPatter extends Component {
    state = {
        noofquestion:0,
        option:'',
        numnberlist:'',
        selectconcept:'No Data',
        selectNoofque:'0',
        titlePatern:'',
        SourceType:"Chapter",
        durationTime:30,
        testSeriesId:'',
        level:'No',
        paternarra:[],
        colors:["red","black","yellow","pink","orange","blue","Purple","green"],
        number1:'brown',
        finalstring:''
    }
    OnClick = () => {
        var rand = this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        this.setState({number1:rand});
        this.setState({noofquestion:this.state.noofquestion+this.state.selectNoofque});
        this.state.paternarra.push({source:this.state.selectconcept,numberOfQuestions:this.state.selectNoofque,level:this.state.level});
        this.setState({paternarra:this.state.paternarra});
    }
    getPater = () =>{
        console.log(JSON.stringify({title:this.state.titlePatern,sourceType:this.state.SourceType,duration:this.state.durationTime,testSeries:this.state.testSeriesId,pattern:this.state.paternarra}));
            
    }
    componentDidMount(){ 
            const concept = [
                {conceptname:"Select Concept",id:""},
                {conceptname:"Number System",id:"5c32084cb21472102036d219"},
                {conceptname:"HCF & LCM",id:"5c32261bb21472102036d21a"},
                {conceptname:"Decimal Fraction",id:"5c32295fb21472102036d21b"},
                {conceptname:"Simplification",id:"5c3229eeb21472102036d21c"},
                {conceptname:"Square & Cube roots",id:"5c322a07b21472102036d21d"},
                {conceptname:"Averages",id:"5c322a17b21472102036d21e"},
                {conceptname:"Problem on Numbers",id:"5c322a2ab21472102036d21f"},
                {conceptname:"Ages",id:"5c322a38b21472102036d220"},
                {conceptname:"Surds & Indices",id:"5c322a4db21472102036d221"},
                {conceptname:"Percentage",id:"5c322a6db21472102036d222"},
                {conceptname:"Profit & loss",id:"5c322a7db21472102036d223"},
                {conceptname:"Ratio & Proportion",id:"5c322a91b21472102036d224"},
                {conceptname:"Partnership",id:"5c322aa1b21472102036d225"},
                {conceptname:"Chain Rule",id:"5c322aafb21472102036d226"},
                {conceptname:"Time & work",id:"5c322ac0b21472102036d227"},
                {conceptname:"Pipes & Cisterns",id:"5c322adeb21472102036d228"},
                {conceptname:"Time & distance",id:"5c322af2b21472102036d229"},
                {conceptname:"Problems on trains",id:"5c322b06b21472102036d22a"},
                {conceptname:"Boats & Stream",id:"5c322b1cb21472102036d22b"},
                {conceptname:"Alligation",id:"5c322b53b21472102036d22c"},
                {conceptname:"Simple Interest",id:"5c322b63b21472102036d22d"},
                {conceptname:"Compound Interest",id:"5c322b99b21472102036d22e"},
                {conceptname:"Logarithms",id:"5c322ba8b21472102036d22f"},
                {conceptname:"Areas",id:"5c322bb4b21472102036d230"},
                {conceptname:"Volume And Surface",id:"5c322bc4b21472102036d231"},
                {conceptname:"Races And Game Skills",id:"5c322bd8b21472102036d232"},
                {conceptname:"Calendar",id:"5c322becb21472102036d233"},
                {conceptname:"Clocks",id:"5c322becb21472102036d234"},
                {conceptname:"Stocks & shares",id:"5c322becb21472102036d235"},
                {conceptname:"Permutations & combinations",id:"5c322becb21472102036d236"},
                {conceptname:"Probability",id:"5c322becb21472102036d237"},
                {conceptname:"True Discount",id:"5c322becb21472102036d238"},
                {conceptname:"Bankers Discount",id:"5c322becb21472102036d239"},
                {conceptname:"Odd man series",id:"5c322c78b21472102036d23b"},
                {conceptname:"Height & Distance",id:"5c322c78b21472102036d23a"},

                {conceptname:"Analogy(verbal & non verbal)",id:"5c322d95b21472102036d241"},
                {conceptname:"Letters Series",id:"5c602b3cf66a46302a121d7c"},
                {conceptname:"Number Series",id:"5c601c3ff66a46302a121d79"},
                {conceptname:"Classification",id:"5c322d9fb21472102036d242"},
                {conceptname:"Analytical Reasoning",id:"5c322db6b21472102036d243"},
                {conceptname:"Water image",id:"5c322dceb21472102036d245"},
                {conceptname:"Mirror Image",id:"5c322dc3b21472102036d244"},
                {conceptname:"Completion of Incomplete Pattern",id:"5c322e00b21472102036d247"},
                {conceptname:"Spotting out Embeed Figure",id:"5c322de8b21472102036d246"},
                {conceptname:"statement and Assumption",id:"5c625c49e4c2df2f7cc6e7b6"},
                {conceptname:"statement and Arguments",id:"5c323298b21472102036d271"},
                {conceptname:"Seating Arrangement",id:"5c626075e4c2df2f7cc6e7c3"},
                {conceptname:"Series Completion",id:"5c322eebb21472102036d251"},
                {conceptname:"Coding/Decoding",id:"5c322f74b21472102036d25e"},
                {conceptname:"Blood relations",id:"5c322f86b21472102036d25f"},
                {conceptname:"Direction sense",id:"5c322fb4b21472102036d262"},
                {conceptname:"Alphabet Test",id:"5c322fd3b21472102036d264"},
                {conceptname:"Number ,Ranking & Time seq",id:"5c32300db21472102036d266"},
                {conceptname:"Logical Seq of word",id:"5c323029b21472102036d268"},
                {conceptname:"Arithmetical Reasoning",id:"5c323041b21472102036d269"},
                {conceptname:"Insertion of missing char",id:"5c32312eb21472102036d26a"},
                {conceptname:"Data Sufficiency",id:"5c3231b7b21472102036d26b"},
                {conceptname:"Assertion & Reason",id:"5c3231e3b21472102036d26d"},
                {conceptname:"Situation Reaction test",id:"5c3231f5b21472102036d26e"},
                {conceptname:"Verification of truth",id:"5c323208b21472102036d26f"},
                {conceptname:"Logic",id:"5c32328bb21472102036d270"},

                {conceptname:"Nouns",id:"5c613dfaf66a46302a121e34"},
                {conceptname:"Pronouns",id:"5c62547ae4c2df2f7cc6e7a2"},
                {conceptname:"Verbs",id:"5c628c5ce4c2df2f7cc6e7dc"},
                {conceptname:"Building Vocabulary (Synonyms,Antonym..etc)",id:"5c32345ab21472102036d27c"},
                {conceptname:"Sentence skills",id:"5c323449b21472102036d27b"},
                {conceptname:"Preposition",id:"5c3234aab21472102036d27e"},
                {conceptname:"arrangement",id:"5c6222cff66a46302a121e4a"},
                {conceptname:"Spotting error",id:"5c323422b21472102036d279"},
                {conceptname:"voice",id:"5c323490b21472102036d27d"},
                {conceptname:"Idioms & Phrases",id:"5c3234edb21472102036d28b"},
                {conceptname:"Narration",id:"5c3234f7b21472102036d28c"}


            ];
            const numberofque = [1, 2,3,4,5,6,7,8,9];
            const numberofque1 = numberofque.map(eachnumber => <option key={uuid.v4()}value={eachnumber}>{eachnumber}</option> )
            const option1 = concept.map(eachconcept => <option key={uuid.v4()} value={eachconcept.id} >{eachconcept.conceptname}</option>);
            this.setState({option:option1})
            this.setState({numnberlist:numberofque1});
        }
  render(){
    return (
        <div>
        <div style={{float:"left", marginRight:"50px"}}>
        <div className="ui label">
        {this.state.noofquestion}
        </div>
        <form className="ui form" style={{width:"500px"}}>
        <div className="field">
        <label htmlFor="title">TitlePatern:</label>
        <input type="text" id="title" value={this.state.title} onChange={(e) => {this.setState({titlePatern:e.target.value})}} required/>
        </div>
        <div className="field" >
        <label htmlFor="preference">SourceType:</label>
        <input type="text" id="preference" value={this.state.SourceType}  readOnly/>
        </div>
        <div className="field">
        <label htmlFor="image">Duration:</label>
        <input type="text" id="image" value={this.state.durationTime} onChange={(e) => {this.setState({durationTime:parseInt(e.target.value)})}} required />
        </div>
        <div className="field">
        <label htmlFor="testSeriesid">TestSeriesID:</label>
        <input type="text" id="testSeriesid" value={this.state.testSeriesId} onChange={(e) => {this.setState({testSeriesId:e.target.value})}} required />
        </div>
        </form>
        <br />
        <br />
        <div className="ui form" style={{width:"500px"}}>
        <div className="field">
            <label>Concept:-</label>
            <select onChange={(e) => {this.setState({selectconcept:e.target.value})}}>
                {this.state.option}
            </select>
        </div>
        <br />
        <div className="field" style={{width:"300px"}}>
            <label>Number of Question In Each Concept:-</label>
            <select onChange={(e) => {this.setState({selectNoofque:parseInt(e.target.value)})}}>
                <option>select</option>
                {this.state.numnberlist}
            </select>
        </div>
        <div className="field" style={{width:"200px"}}>
            <label>Level of Question:-</label>
            <select onChange={(e) => {this.setState({level:parseInt(e.target.value)})}}>
                <option>select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <button className="ui button" onClick={() => this.OnClick()}>Add</button>
        <button onClick={() => this.getPater()} className="ui button">Submit</button>
        </div>
        </div>
        <div style={{color:this.state.number1}}>
        <h1>Preview</h1>
        <h2>Id:- {this.state.selectconcept}</h2>
        <h2>No of Question:- {this.state.selectNoofque}</h2>
        <h2>Level:- {this.state.level}</h2>

        </div>
        </div>
    )
  }
}
