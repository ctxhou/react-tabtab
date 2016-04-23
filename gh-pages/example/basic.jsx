var React = require('react');
var Tab = require('react-tabtab');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var App = React.createClass({
  render: function() {
    return (
      <Tabs style="tabtab__folder__" draggable={false}>
        <Panel title="Tab1">
          It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning. They are easy to pronounce, and this also helps to make them sound like they are real. Pseudowords have been around ever since our brain evolved the ability to process language, it is probably how all our modern day words came into being. A language has a lot of sounds called phonemes which when used in various combinations, you can create relatable sounds that do not have any meaning behind them, this is where a meaning could be attached to a sound to create a new word.
        </Panel>
        <Panel title="Tab2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Panel>
        <Panel title="Tab3">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Panel>
      </Tabs>
    )
  }
})

function handleAddTab() {
  console.log('click add tab')
}

function handleDeleteButton() {
  console.log('click delete button')
}

function handleTabDeleteButton() {
  console.log('click tab delete')
}

module.exports = App;