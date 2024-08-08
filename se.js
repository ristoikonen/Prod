
//import { Octokit } from "octokit";
// const octokit = new Octokit({ 
//     auth: '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',
//   });

// const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
//     owner: "octocat",
//     repo: "Spoon-Knife",
//   });


/*
fetch('https://api.github.com/users/username')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        console.log(data);
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });
*/

fetch('https://api.github.com/search/code?q=YOUR_QUERY')
    .then(response => response.json())
    .then(data => {
        // Process the search results here
        console.log(data.items);
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });

    const callSearchCode = async function(a) {
        console.log('ddd');
        let result = await searchCode(a);
        console.log(result);
    }

    function searchCode(queryString) {
        console.log(queryString);
        
        fetch(`https://api.github.com/search/code?q=${queryString}`)
            .then(response => response.json())
            .then(data => {
                // Process the search results here
                console.log(data.items);
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
    }

    async function  getCode(queryString) {
        console.log(queryString);
        
        await octokit.request("GET /repos/{owner}/{repo}/issues", {
            owner: "ristoikonen",
            repo: "prod",
            per_page: 2
            });

    }

