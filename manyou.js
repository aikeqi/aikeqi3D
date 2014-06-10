#pragma strict

/*
function Start () {

}

function Update () {

}

function OnGUI(){
if (GUILayout.Button("×ø±ê×ª»»", GUILayout.Height(30)))
{
this.transform.position = new Vector3(100, 50, 100);
}
if (GUILayout.Button("×ø±ê×ª»»2", GUILayout.Height(30)))
{
this.transform.position = new Vector3(1000, 50, 100);
}
}*/

private var nonGravity :
boolean = false;

private var Ypos1 :
float = 0.0;
private var Ypos2 :
float = 0.0;
private var Ypos3 :
float = 0.0;
private var Ypos4 :
float = 0.0;
private var showDropdownButtons1 :
boolean;
private var showDropButtonsUP1 :
boolean;
var dropSpeed :
float = 400.0;// the speed
var xiaojiaoshi : Vector3 = new Vector3(744, 40, 916);
var jifang : Vector3 = new Vector3(1210, 180, 915);
var tianhuaban : Vector3 = new Vector3(1115, 205, 930);
var sanlou : Vector3 = new Vector3(579, 180, 828);

function Update()
{
    if(showDropdownButtons1 == true)
    {
        Ypos1 += Time.deltaTime * dropSpeed;
        Ypos2 += Time.deltaTime * dropSpeed;
        Ypos3 += Time.deltaTime * dropSpeed;
        Ypos4 += Time.deltaTime * dropSpeed;
        if(Ypos1 >= 130)
        {
            Ypos1 = 130;
        }
        if(Ypos2 >= 160)
        {
            Ypos2 = 160;
        }
        if(Ypos3 >= 190)
        {
            Ypos3 = 190;
        }
        if(Ypos4 >= 220)
        {
            Ypos4 = 220;
        }
        if(showDropButtonsUP1 == true)
        {
            Ypos1 -= Time.deltaTime * dropSpeed;
            Ypos2 -= Time.deltaTime * dropSpeed;
            Ypos3 -= Time.deltaTime * dropSpeed;
            Ypos4 -= Time.deltaTime * dropSpeed;
            if(Ypos1 >= 0 || Ypos2 >= 0 || Ypos3 >= 0 || Ypos4 >= 0)
            {
                Ypos1 = 100;
                Ypos2 = 100;
                Ypos3 = 100;
                Ypos4 = 100;
                showDropButtonsUP1 = false;
                showDropdownButtons1 = false;
            }
        }
    }
}
// Display Button
function OnGUI ()
{
    if(showDropdownButtons1 == false)
    {
        if (GUI.RepeatButton (Rect (0, 100, 100, 30), "Select"))
        {
            showDropdownButtons1 = true;
        }
    }
    if(showDropdownButtons1 == true)
    {
        if (GUI.Button (Rect (0, 100, 100, 30), "Select"))
        {
            showDropButtonsUP1 = true;
            showDropdownButtons1 = false;
        }
        if (GUI.Button (Rect (0, Ypos1, 100, 30), "小教室"))
        {
            this.transform.position = xiaojiaoshi;
            showDropButtonsUP1 = true;
            showDropdownButtons1 = false;
        }
        if (GUI.Button (Rect (0, Ypos2, 100, 30), "机房"))
        {
            this.transform.position = jifang;
            showDropButtonsUP1 = true;
            showDropdownButtons1 = false;
        }
        if (GUI.Button (Rect (0, Ypos3, 100, 30), "天花板"))
        {
        	this.transform.position = tianhuaban;
            showDropButtonsUP1 = true;
            showDropdownButtons1 = false;
        }
        if (GUI.Button (Rect (0, Ypos4, 100, 30), "三楼"))
        {
       		this.transform.position = sanlou;
            showDropButtonsUP1 = true;
            showDropdownButtons1 = false;
        }
    }
//	if ()
//	{
//	 if (nonGravity)
//	 {
//	 this.useGravity = false;
//	 }
//	 else
//	 {
//	 this.useGravity = true;
//	 }
//	 nonGravity = GUI.Toggle(Rect(150, 0, 250, 30), nonGravity, "È¡ÏûÖØÁŠ");
//	}
}