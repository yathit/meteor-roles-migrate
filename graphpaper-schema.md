## Roles

* Guest  
* SquareOwner  
* CanvasMember  
* CanvasOwner  
* ProjectMember  
* ProjectOwner  
* OrganizationMember  
* OrganizationAdmin


## Actions
    
    OrganizationAdmin
      organization.member.add 
      organization.member.remove
      
    OrganizationMember
      project.create -> ProjectOwner
    
    ProjectOwner
      project.remove  
      project.member.add
      project.member.remove
      
    ProjectMember
      project.read
      project.update
      canvas.create -> CanvasOwner
    
    CanvasOwner
      canvas.remove  
      canvas.member.add
      canvas.member.remove
        
    CanvasMember
      canvas.read
      canvas.update
      square.create -> SquareOwner
      
    SquareOwner
      square.read
      square.update
      square.delete
      
    Guest (non-member)
      same as canvas member
      
  
## User collections in client

List all project/canvas he has read access
    
      Collection(project)
        ProjectOwner
        ProjectMember
    
      Collection(canvas)
        CanvasOwner
        CanvasMember
        
      Collection(square)
        SquareOwner
     
  
  
