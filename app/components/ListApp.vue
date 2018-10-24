<template>
	<Page class="page">
		<ActionBar title="The Log Book" class="action-bar" />

		<TabView height="100%" selectedTabTextColor='indigo' tabTextFontSize='15' androidTabsPosition="bottom">
			<TabViewItem title="Log" textTransform='uppercase'>
				<!-- Positions an input field, a button, and the list of tasks in a vertical stack. -->
				<StackLayout orientation="vertical" width="100%" height="100%">

					<GridLayout columns="2*,*" rows="*" width="100%" height="250px">
						<!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
						<TextField col="0" row="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" />

						<Button col="1" row="0" text="Add task" @tap="onButtonTap" />
                    </GridLayout>

                    <ListView separatorColor="transparent" class="list-group" for="item in items" @itemTap="onItemTap" style="height:75%">
                        <v-template>
                        <Label id="log" :text="item.name" class="list-group-item-heading" textWrap="true" />
                        </v-template>
                    </ListView>
                </StackLayout>
            </TabViewItem>
            <TabViewItem title="Completed" textTransform='uppercase'>
				<ListView separatorColor="transparent" class="list-group" for="fin in finished" @itemTap="onFinTap" style="height:75%">
					<v-template>
						<Label id="completed-task" :text="fin.name" class="list-group-item-heading" textWrap="true" />
                    </v-template>
                </ListView>
            </TabViewItem>
        </TabView>
  </Page>
</template>

<script>
export default {
    methods: {
        onItemTap: function(args) {
            action("What do you want to do with this task?", "Cancel", [
                "Complete?",
                "Delete?"
            ]).then(result => {
                console.log(result);
                // Logs the selected option for debugging.
                switch (result) {
                    case "Complete?":
                        this.finished.unshift(args.item); // Placesthe tapped active task at the top of the completed tasks.
                        this.items.splice(args.index, 1); // Removes the tapped activetask.
                        break;
                    case "Delete?":
                        this.items.splice(args.index, 1); // Removes the tapped active task.
                        break;
                    case "Cancel" || undefined: // Dismisses the dialog
                        break;
                }
            });
        },
        onFinTap(args) {
            action("What do you want to do with this task?", "Cancel", [
                "Restore Log",
                "Delete Forever?"
            ]).then(result => {
                console.log(result); // Logs the selected option for debugging.
                switch (result) {
                    case "Restore Log":
                        this.items.unshift(args.item); // Places the tapped completed task at the top of the to do tasks.
                        this.finished.splice(args.index, 1); // Removes the tapped completed task.
                        break;
                    case "Delete Forever?":
                        this.finished.splice(args.index, 1); // Removes the tapped completed task.
                        break;
                    case "Cancel" || undefined: // Dismisses the dialog
                        break;
                }
            });
        },
        onButtonTap() {
            console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
            this.items.unshift({ name: this.textFieldValue }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
            this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
        }
    },

    data() {
        return {
            items: [],
            finished: [],
            textFieldValue: ""
        };
    }
};
</script>

<style scoped>
    .home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
TextField {
  font-size: 20;
  color: #53ba82;
  margin-top: 10;
  margin-bottom: 10;
  margin-right: 5;
  margin-left: 20;
}
Button { 
  font-size: 20; 
  font-weight: bold; 
  color: white; 
  background-color: #53ba82; 
  height: 45;
  margin-top: 10; 
  margin-bottom: 10; 
  margin-right: 10; 
  margin-left: 10; 
  border-radius: 20px; 
}
#log {
  font-size: 20;
  font-weight: bold;
  color: #53ba82;
  margin-left: 20;
  padding-top: 5;
  padding-bottom: 10;
}
#completed-task {
  font-size: 20;
  color: #d3d3d3;
  margin-left: 20;
  padding-top: 5;
  padding-bottom: 10;
  text-decoration: line-through;
}
</style>
