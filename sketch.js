const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;
//level one
var block1,block2,block3,block4,block5,block6,block7;
//level two
var block8,block9,block10,block11,block12;
//level three
var block13,block14,block15;
//top level
var block16;

function preload() {

}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(600,350,300,20);
    stand2 = new Ground(1000,200,300,20)

    block1 = new Box(160,325,30,40);
    block2
    block3
    block4
    block5
    block6
    block7
}

function draw(){
    background(55,43,43);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    stand1.display();
    stand2.display();
    block1.display();
}