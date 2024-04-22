function countDown (number) {
    if (number <= 0) {
      return
    }
    console.log(number)
    countDown(number - 1)
  }
  countDown(5)
  //2
  //1

  const dump = [
    {
        'type': 'folder',
        'name': 'cats',
        'children': [
            {
                'type': 'image',
                'name': 'Buffy'
            },
            {
                'type': 'image',
                'name': 'Gizmo'
            },
            {
                'type': 'folder',
                'name': 'small-cat',
                'children': [
                    {
                        'type': 'image',
                        'name': 'Fluffy'
                    },
                    {
                        'type': 'image',
                        'name': 'Harry'
                    },
                    {
                        'type': 'folder',
                        'name': 'black-cat',
                        'children': [
                            {
                                'type': 'image',
                                'name': 'Daisy'
                            },
                            {
                                'type': 'image',
                                'name': 'Toby'
                            }
                        ]
                    },
                    {
                        'type': 'folder',
                        'name': 'white-cat',
                        'children': [
                            {
                                'type': 'image',
                                'name': 'Minnie'
                            },
                            {
                                'type': 'image',
                                'name': 'Lucy'
                            }
                        ]
                    }
                ]
            },
            {
                'type': 'folder',
                'name': 'future-cat',
                'children': []
            }
        ]
    }
]

  
const catNamesArray = ['Buffy', 'Gizmo', 'Fluffy', 'Harry', 'Daisy', 'Toby', 'Minnie', 'Lucy']
function catNames(folder) {
    for(object of folder) {
        if(object.type === "image") {
            catNamesArray.push(object.name)
        } else if(object.type === "folder") {
            catNames(object.children)
        }
    }
}
catNames(dump)
console.log(catNamesArray)
//['Buffy', 'Gizmo', 'Fluffy', 'Harry', 'Daisy', 'Toby', 'Minnie', 'Lucy']