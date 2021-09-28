import Link from 'next/link'
import TocLayout from '../../components/TocLayout'

export default function Chapter({ base }) {
  return (
    <TocLayout base={base}>
      <div style={{ textAlign: "center" }}>
        <img src={`${base}/images/ch04.png`} width="300px" />
      </div>
      <h1>
        4. <i>Use State</i> to Dispatch States
      </h1>
      <Link href="/chapter">
        <a className="back">←</a>
      </Link>
      <ul>
        <li>History of <i>UI</i> Components</li>
      </ul>

      <h1 id='history-of-ui-components'>
        Sample Chapters
      </h1>
      <h2>
        History of <i>UI</i> Components
      </h2>
      <p>Most of time we are fascinated by how fast and how cool each new new technology developing around us, but sometimes we can also get intrigued by how slow some technology evolves over past decades. </p>
      <p>On the web, it&#39;s the <em>HTML</em>. Funny if you had slept for the past twenty years, you should still be able to wake up and start coding  right away. The following code wouldn&#39;t surprise you at all. </p>
      <p>Reviewing the preceding code, we can see some standardization around <code>doctype</code>, and a specific meta statement made for mobile devices. And yes we have all sorts of mobile devices now. However the rest of the content continues to be valid without any modification. </p>
      <p>This doesn&#39;t mean the web hasn&#39;t been changed. On the contrary, tremendous effort has been spent on how to generate the preceding <em>HTML</em> with less effort. Web engineers have tried to chop the lines into three parts, <em>HTML/CSS/JS</em> and put them in separate places and then stick them together. They have tried to load all parts on servers, or some parts on server, and some parts on the local computer. They have tried to various compiler or builder to auto generate the file after changes to the source code. They have tried lots of things. Actually almost anything you can think of around <em>HTML</em>, it has been tried couple of times in history. And believe it or not, a technology proven to be not working at certain years can become sound and valid in some other years. This is web, people are mostly having fun all the time.</p>
      <p>There&#39;s one thing that has been agreed after the web got so popular. That is with so much new content adding to the WWW, people find the <em>HTML</em> file a bit unmanageable.  It&#39;s mainly coming from two angles. One is the demand, users want to see actions performed quickly without delay, also they want more content to be added. Two with all screen actionable, it creates a bit challenge for the developer to manage each screen section that is actionable.</p>
      <p>Essentially we have been looking for some ways to organize <em>HTML</em> by functional purposes. From the engineer point of view, if this can be done in a meaningful way, it can help the developer to not get too overwhelmed by all the elements on the screen. From the design and project point of view, it&#39;s always good to limit the work by sections of screen or by widgets.</p>
      <p>Let&#39;s take a look some of the milestone projects happened in history that puts us in that direction.</p>
      <h2 id='bootstrap'>Bootstrap</h2>
      <p>Started as an internal tool to document and share common design patterns and assets within <em>Twitter</em>, <em>Bootstrap</em> has been the go-to framework when anyone want to start prototyping their next startup web project since it contains design templates for typography, forms, buttons, navigation and other interface components. It&#39;s not too difficult to spin a website with not too crapy <em>UI</em> with lines like below.</p>
      <p>If we need to add an Accordion behavior to a page, we can easily go to <em>Bootstrap</em> website, and copy the template code over so we can customize the behavior in our own copy. It was revolutionary at that time. And you can see this approach doesn&#39;t have any learning curve, all we need to do is, copy and paste.</p>
      <p>Although there&#39;s no physical shape of widgets or components defined in <em>Bootstrap</em>, since after the copy-and-paste, it still forms a giant <em>HTML</em> file, all the templates it provides are organized in some major categories such as Layout, Content, Form, Components and Helpers. There&#39;s a purpose for each template. And under the Components category, you can find Breadcrumb, Button, Collapse, Dropdown and so forth.  This is one of the early attempt that people find certain <em>HTML</em> lines form a pattern of functionality. And by borrowing  from these snippets, we can make our job productive. We have been using this approach even today, especially in the prototyping industry.</p>
      <h2 id='jquery'>jQuery</h2>
      <p><em>jQuery</em> is a library can be used to manipulate <em>DOM</em> elements on the screen. It recognized the challenge of working with <em>DOM</em> directly, therefore it provides a utility layer to simplify the syntax of finding, selecting and manipulating <em>DOM</em> elements. </p>
      <p>One of  the strong designs from <em>jQuery</em> is the separation of <em>Javascript</em> and <em>HTML</em>,  since it allows to create <em>DOM</em> through <em>Javascript</em> without writing <em>HTML</em> or it can create a handle to work with existing <em>DOM</em> created by <em>HTML</em>. Essentially it establishes a wrapper for each element via the famous <code>$</code> symbol:</p>
      <p>Although writing things in <em>Javascript</em> is a bit challenge than <em>HTML</em>, there&#39;s no other way to change color, font, or position of an element at runtime. So <em>jQuery</em>&#39;s capability of allowing coding a pair of logic for a specific section of <em>HTML</em> becomes the only solution at that time to create large scale widget and be able to maintain the codebase at the same time.</p>

    </TocLayout>
  )
}
