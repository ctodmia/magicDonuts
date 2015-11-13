# Contributing

## General Workflow

1. Fork the repo
1. Cut a namespaced feature branch from master
1. Make commits to your feature branch. Please see below to review our short commit style guide.
1. Rebase upstream changes into your branch. submit a [pull request][] directly to master. 
1. Your pull request will be reviewed by another maintainer. This code review will help keep the codebase clean and high quality. If your code reviewer requests you make a change you don't understand, ask them about it. Do not merge your own commits.
1. Fix any issues raised by the code reviwer, and push fixes as a single new commit.  It will be merged  to be merged after successful review by a member of the team. 

## Detailed Workflow

So you're ready to code. 

###Fork the repo
  
### Cut a namespaced feature branch from master

Name your branch based on the types below:
Note: This naming is much less important than that of commit messages you write! Use it to get used to the modification types!

<ul>__TYPES__<<ul>
  <li>feat     Choose this name if you plan to work on a new feature</li>
  <li>fix      Choose this if the branch is intended to fix a bug</li>
  <li>style    Choose for style, re-alignment or beautification updates to include formatting, whitespace, semi-colons, etc</li>
  <li>docs     Changes to forward-facing docs like ReadMe.md or this one., <strong>not to dependencies, libraries or code</strong> </li>
  <li>refactor (self-explanatory)
  <li>test     For adding missing tests</li>
  <li>chore    For adding dependencies or libraries, to include package.json changes</li>

``` bash
# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your new branch. 
## magicDonuts commit styleguide

<i> Remember:If you find yourself making unrelated changes, simply cut a new branch for them from master (same as above).</i> 

Each commit is composed of two parts: type and summary. *

TYPE, defined above, is the category of modification.  Choose from this list: 
__TYPES__
  feat:     A new feature
  fix:      A bug fix
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  docs:     Changes to background documentation (but not to dependencies or libraries, or code). 
  refactor: A code change that neither fixes a bug nor adds a feature
  test:     Adding missing tests
  chore:    Updates or changes to dependencies or libraries, may include generation of node packages or package.json changes

Please adhere to our commit styleguide for all commits. 

The commit summary states the change in the past tense.

Examples:
<code>docs: Created README file</code>

Optional: Describe what the change improves or updates. 
  *For this option, you must add your description below the type and summary, after one line of vertical whitespace (hit enter twice). 

<code>style: Updated indentations and increased whitespace</code>
<code>Improves code readability</code>

*This guide is loosely based on the commit styleguide published for angular.js, which can be found at: <a href="Commits a la Angular.js" https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit>

### Rebase upstream changes into your branch

<code> you$     git pull --rebase upstream master </code>

### Make a pull request

Make a clear pull request from your fork and branch to the upstream master
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is the faster you can get
your changes incorporated into this repo.

At least one other person MUST give your changes a code review, and once
they are satisfied they will merge your changes into upstream. Alternatively,
they may have some requested changes. You should make more commits to your
branch to fix these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat again.

Thanks for contributing!

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Apply the [boy scout rule][].
    - Follow [STYLE-GUIDE.md](STYLE-GUIDE.md)
1. Run the [tests][] before submitting a pull request.
1. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
1. Your pull request is comprised of a single ([squashed][]) commit.

## Checklist:

These might help you organize your process:

- [ ] Did I cut my work branch off of master (don't cut new branches from existing feature brances)?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
 - [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase the upstream master branch after I finished all my
  work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
 - [ ] Did I make any requested changes from that code review?


<!-- Links -->
[style guide]: https://github.com/telegraphacademy-labs/style-guide
[n-queens]: https://github.com/telegraphacademy-labs/n-queens
[Underbar]: https://github.com/telegraphacademy-labs/underbar
[curriculum workflow diagram]: http://i.imgur.com/p0e4tQK.png
[cons of merge]: https://f.cloud.github.com/assets/1577682/1458274/1391ac28-435e-11e3-88b6-69c85029c978.png
[Bookstrap]: https://github.com/telegraphacademy/bookstrap
[Taser]: https://github.com/telegraphacademy/bookstrap
[tools workflow diagram]: http://i.imgur.com/kzlrDj7.png
[Git Flow]: http://nvie.com/posts/a-successful-git-branching-model/
[GitHub Flow]: http://scottchacon.com/2011/08/31/github-flow.html
[Squash]: http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html
